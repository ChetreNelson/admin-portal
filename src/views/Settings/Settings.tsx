const Settings = () => {
  const userEmail = localStorage.getItem("mythBoost");
  return <div>Hello {userEmail}</div>;
};

export default Settings;
