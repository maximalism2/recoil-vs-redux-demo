import styled from "@emotion/styled";

const FieldRow = styled.div`
  margin-bottom: 1em;
`

export const Field = ({label, children}) => (
  <FieldRow>
    <label>
      {label}: {children}
    </label>
  </FieldRow>
);
