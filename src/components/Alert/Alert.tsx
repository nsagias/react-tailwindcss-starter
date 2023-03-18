import { FiAlertTriangle } from "react-icons/fi";

import "./Alert.css"
export default function Alert() {
  return (
     <div className="alert alert-postion">
      <div className="alert-log-wrap">
        <FiAlertTriangle className="alert-logo" />
      </div>
      <div className="alert-body">
        <h4 className="alert-title">Confirm</h4>
        <p className="alert-message">Are you sure you want to proceed?</p>
      </div>
    </div>
  );
}