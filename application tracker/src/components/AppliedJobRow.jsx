import styled from "styled-components";
import dayjs from "dayjs";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  align-items: center;
  justify-content: start;
  font-size: 12px;
  background-color: white;
  border-bottom: 2px solid #f5f9ff;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: gray;
  gap: 0.25rem;
`;
const StyledParagraph = styled.p`
  margin-bottom: auto;
  margin-top: auto;
  display: flex;
  border-right: 2px solid;
  border-right-color: #f5f9ff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  word-break: break-all;
  width: 60px;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AppliedJobRow = ({ details }) => {
  const formattedTimestamp = details.timestamp
    ? dayjs(details.timestamp).format("DMMM'YY")
    : "";

  return (
    <TableRow>
      <StyledParagraph>{formattedTimestamp}</StyledParagraph>
      <StyledParagraph>{details.companyName}</StyledParagraph>
      <StyledParagraph>{details.jobTitle}</StyledParagraph>
      <StyledParagraph>{details.Status}</StyledParagraph>
      <a
        className="w-[56.8px]"
        href={`https://ca.indeed.com/viewjob?jk=${details.Link}`}
        target="_blank"
        rel="noopener noreferrer">
        Link
      </a>
    </TableRow>
  );
};

export default AppliedJobRow;
