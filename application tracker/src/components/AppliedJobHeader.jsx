import styled from "styled-components";

const AppliedJobHeader = () => {
  return (
    <TableHeader role="row">
      <div className="text-center">Date</div>
      <div className="text-center">Company</div>
      <div className="text-center">Title</div>
      <div className="text-center">Status</div>
      <div className="text-center">Link</div>
    </TableHeader>
  );
};

export default AppliedJobHeader;
const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  gap: 0.25rem;
  align-items: center;
  justify-content: start;
  font-size: 12px;
  background-color: rgb(190, 214, 250);
  border-bottom: 2px solid rgb(190, 214, 250);
  letter-spacing: 0.4px;
  font-weight: 700;
  color: #4b5563;
  padding: 0.75rem 0;
`;
