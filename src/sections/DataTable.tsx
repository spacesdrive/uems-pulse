/** Responsive table: a real table from md up, stacked label/value cards on phones. */
export function DataTable({ head, rows, note }: { head: string[]; rows: string[][]; note?: string }) {
  return (
    <div data-reveal>
      <div className="card hidden overflow-hidden md:block">
        <table className="w-full text-left text-[15px] leading-6">
          <thead className="bg-primary-50">
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className="px-5 py-4 font-semibold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r, i) => (
              <tr key={i} className="transition-colors hover:bg-surface">
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-5 py-4 align-top font-medium text-ink">
                      {c}
                    </th>
                  ) : (
                    <td key={j} className="px-5 py-4 align-top whitespace-pre-line text-muted">
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="grid gap-3 md:hidden">
        {rows.map((r, i) => (
          <li key={i} className="card p-5">
            <p className="font-semibold">{r[0]}</p>
            <dl className="mt-3 space-y-2 text-[15px]">
              {r.slice(1).map((c, j) => (
                <div key={j}>
                  <dt className="text-xs font-medium tracking-wide text-muted uppercase">{head[j + 1]}</dt>
                  <dd className="whitespace-pre-line">{c}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      {note && <p className="mt-4 text-sm text-muted">{note}</p>}
    </div>
  );
}
