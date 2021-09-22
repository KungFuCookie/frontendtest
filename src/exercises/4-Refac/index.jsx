/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

import { useState } from "react";

const Refac = () => {
  const [member, setMember] = useState();
  const [code, setCode] = useState();
  const [order, setOrder] = useState();

  return (
    <div>
      <h1>My Refac</h1>
      <pre>
        You clicked on: {member || "—"} code: {code || "—"} order:{" "}
        {order || "—"}
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
          <tr>
            <td
              onClick={() => {
                setMember("Guillaume");
                setCode("ABCD");
                setOrder(1);
              }}
            >
              {"Guillaume"}
            </td>
            <td>{"ABCD"}</td>
            <td>1</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Josian");
                setCode("1234");
                setOrder(2);
              }}
            >
              {"Josian"}
            </td>
            <td>{"1234"}</td>
            <td>2</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Jules");
                setCode("EFGH");
                setOrder(3);
              }}
            >
              {"Jules"}
            </td>
            <td>{"EFGH"}</td>
            <td>3</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Marvin");
                setCode("IJKL");
                setOrder(4);
              }}
            >
              {"Marvin"}
            </td>
            <td>{"IJKL"}</td>
            <td>4</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Valery");
                setCode("5678");
                setOrder(5);
              }}
            >
              {"Valery"}
            </td>
            <td>{"5678"}</td>
            <td>5</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Fadi");
                setCode("UVWX");
                setOrder(6);
              }}
            >
              {"Fadi"}
            </td>
            <td>{"UVWX"}</td>
            <td>6</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Dan");
                setCode("QRST");
                setOrder(7);
              }}
            >
              {"Dan"}
            </td>
            <td>{"QRST"}</td>
            <td>7</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Nicolas");
                setCode("91011");
                setOrder(8);
              }}
            >
              {"Nicolas"}
            </td>
            <td>{"91011"}</td>
            <td>8</td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setMember("Emilie");
                setCode("MNOP");
                setOrder(9);
              }}
            >
              {"Emilie"}
            </td>
            <td>{"MNOP"}</td>
            <td>9</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Number of members</td>
            <td>9</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Refac;
