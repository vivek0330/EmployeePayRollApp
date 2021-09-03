window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
  let innerHtml = `${headerHtml}`;
  let employeePayrollList = createEmployeePayrollJSON();
  for (const employee of employeePayrollList) {
    innerHtml = `${innerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="${employee._picture}">
    </td>
    <td>${employee._name}</td>
    <td>${employee._gender}</td>
    <td>${getDeptHtml(employee._department)}</td>
    <td>${employee._salary}</td>
    <td>${employee._startDate}</td>
    <td>
        <img id="${
          employee._id
        }" onclick="remove(this)" alt="delete" src="../employeeAppjs/assests/icons/delete-black-18dp.svg">
        <img id="${
          employee._id
        }" alt="edit" onclick="update(this)" src="../employeeAppjs/assests/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
  }
  document.querySelector("#display").innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
  let employeeListLocal = [
    {
      _name: "Vivek",
      _gender: "Male",
      _department: ["Engineering"],
      _salary: "50000",
      _startDate: "16 Aug 2021",
      _note: "",
      _id: new Date().getTime(),
      _picture: "../employeeAppjs/assests/profile-images/Ellipse -3.png",
    },
    {
      _name: "Laiba",
      _gender: "Male",
      _department: ["finance", "Sales"],
      _salary: "4000",
      _startDate: "18 Nov 2019",
      _note: "",
      _id: new Date().getTime() + 1,
      _picture: "../employeeAppjs/assests/profile-images/Ellipse -1.png",
    },
  ];
  return employeeListLocal;
};

const getDeptHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
  }
  return deptHtml;
};
