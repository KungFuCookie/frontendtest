/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

import { useState } from "react";
interface Member {
  member: string;
  code: string;
  order: number;
}

const members : Member[] = [
  { member: 'Guillaume', code: 'ABCD', order: 1 },
  { member: 'Josian', code: '1234', order: 2 },
  { member: 'Jules', code: 'EFGH', order: 3 },
  { member: 'Marvin', code: 'IJKL', order: 4 },
  { member: 'Valery', code: '5678', order: 5 },
  { member: 'Fadi', code: 'UVWX', order: 6 },
  { member: 'Dan', code: 'QRST', order: 7 },
  { member: 'Nicolas', code: '91011', order: 8 },
  { member: 'Emilie', code: 'MNOP', order: 9 },
];

const Refac = () => {
  const [member, setMember] = useState<Member>();

  const getRow = (row: Member) => {
    return <tr key={row.code}>
      <td
        onClick={() => {
          setMember(row);
        }}
      >
        {row.member}
      </td>
      <td>{row.code}</td>
      <td>{row.order}</td>
    </tr>
  }

  return (
    <div>
      <h1>My Refac</h1>
      <pre>
        You clicked on: {member?.member || "—"} code: {member?.code || "—"} order:{" "}{member?.order || "—"}
      </pre>
      <table>
        <thead>
          <tr>
            <th>member</th>
            <th>code</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
          {members.map((row) => getRow(row))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Number of members</td>
            <td>{members ? members.length : 0}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Refac;
