import { SafetyCertificateOutlined } from "@ant-design/icons";
const User = ({ newApplicant }) => {
  const imgUrl =
    "https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className="admin-user d-flex">
      <img className="img" src={imgUrl} alt="" />
      <p>d1e9b2e9</p>
      <p>Applicant Name</p>
      <p>9876543210</p>
      <p>user@example.com</p>
      <p>buyer</p>
      <p>View Document</p>
      <p>View Document</p>
      <p>City-State-123456</p>

      <div className="status d-flex-center">
        {newApplicant && (
          <>
            <div className="approve">Approve</div>
            <div className="decline">Decline</div>
          </>
        )}
        {!newApplicant && (
          <p>
            
            <SafetyCertificateOutlined />
            {" "}
            Approved
          </p>
        )}
      </div>
    </div>
  );
};

export default User;
