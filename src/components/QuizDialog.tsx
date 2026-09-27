import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles, X } from 'lucide-react';
import type { Quiz } from '@/data/careerTests';
import { Button } from './Button';
import { cn } from '@/lib/cn';

type Letter = 'A' | 'B' | 'C' | 'D';

function topLetter(answers: Letter[]): Letter {
  const counts = answers.reduce<Record<string, number>>((acc, a) => ({ ...acc, [a]: (acc[a] ?? 0) + 1 }), {});
  // Ties resolve to the first answer given, which best reflects the student's leading instinct.
  return answers.reduce((best, a) => (counts[a] > counts[best] ? a : best), answers[0]);
}

/** Three-question curriculum quiz in a native modal dialog (focus trapping and Esc handled by the browser). */
export function QuizDialog({ quiz, onClose }: { quiz: Quiz | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(-1); // -1 intro, 0..n-1 questions, n result
  const [answers, setAnswers] = useState<Letter[]>([]);

  // Restart from the intro whenever a different quiz is opened.
  const [prevQuiz, setPrevQuiz] = useState(quiz);
  if (quiz !== prevQuiz) {
    setPrevQuiz(quiz);
    setStep(-1);
    setAnswers([]);
  }

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (quiz) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) dialog.close();
  }, [quiz]);

  if (!quiz) return <dialog ref={ref} onClose={onClose} />;

  const total = quiz.questions.length;
  const done = step >= total;
  const progress = done ? 100 : Math.max(0, (step / total) * 100);
  const current = step >= 0 && !done ? quiz.questions[step] : null;
  const result = done ? quiz.results[topLetter(answers)] : null;

  const choose = (letter: Letter) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = letter;
      return next;
    });
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="quiz-title"
      className="m-auto w-[min(560px,calc(100%-2rem))] rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-navy-900/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="quiz-title" className="text-lg font-semibold">
              {quiz.title}
            </h2>
            <p className="text-sm text-muted">3 quick questions</p>
          </div>
          <button type="button" onClick={() => ref.current?.close()} aria-label="Close quiz" className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-line hover:bg-surface">
            <X aria-hidden className="size-5" />
          </button>
        </div>

        <div className="mt-5">
          <div className="flex justify-between text-xs font-medium text-muted">
            <span>{step < 0 ? 'Get Ready' : done ? 'Complete' : `Question ${step + 1} of ${total}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-primary-50" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-6 min-h-64" aria-live="polite">
          {step < 0 && (
            <div className="animate-page-in py-6 text-center">
              <span className="icon-circle size-14">
                <Sparkles aria-hidden className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{quiz.heading}</h3>
              {quiz.intro.map((l) => (
                <p key={l} className="mt-1 text-sm text-muted">
                  {l}
                </p>
              ))}
            </div>
          )}

          {current && (
            <fieldset key={step} className="animate-page-in">
              <legend className="flex items-center gap-2 text-lg font-semibold">
                <span className="rounded-full bg-gold-50 px-2 py-0.5 text-xs font-bold text-navy">Q{step + 1}</span>
                {current.q}
              </legend>
              <div className="mt-4 grid gap-2.5">
                {(Object.entries(current.options) as [Letter, string][]).map(([letter, text]) => {
                  const selected = answers[step] === letter;
                  return (
                    <label
                      key={letter}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-2xl border p-3.5 transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary',
                        selected ? 'border-primary bg-primary-50' : 'border-line hover:border-primary/40 hover:bg-surface',
                      )}
                    >
                      <input type="radio" name={`q${step}`} value={letter} checked={selected} onChange={() => choose(letter)} className="sr-only" />
                      <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold', selected ? 'bg-primary text-white' : 'bg-surface text-ink')}>
                        {letter}
                      </span>
                      <span className="font-medium">{text}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          )}

          {result && (
            <div className="animate-page-in py-4 text-center">
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{result.trait}</p>
              <h3 className="mt-2 text-2xl font-semibold">{result.title}</h3>
              <p className="mt-3 text-muted">{result.text}</p>
              <p className="mt-5 rounded-2xl bg-surface p-4 text-sm">
                This quick quiz is a starting point. Take the full EvalTest assessment for a scientific, detailed report on your strengths and ideal pathways.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button label="Take the EvalTest" href="https://www.evaltest.com/" />
                <button type="button" onClick={() => { setStep(-1); setAnswers([]); }} className="btn btn-outline">
                  <RotateCcw aria-hidden className="size-4" /> Retake
                </button>
              </div>
            </div>
          )}
        </div>

        {!done && (
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className={cn('btn btn-outline', step <= 0 && 'invisible')}
            >
              <ArrowLeft aria-hidden className="size-4" /> Previous
            </button>
            <button
              type="button"
              disabled={step >= 0 && !answers[step]}
              onClick={() => setStep((s) => s + 1)}
              className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {step < 0 ? 'Start Quiz' : step === total - 1 ? 'See Results' : 'Next'}
              {step === total - 1 ? <Sparkles aria-hidden className="size-4" /> : <ArrowRight aria-hidden className="btn-arrow size-4" />}
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
