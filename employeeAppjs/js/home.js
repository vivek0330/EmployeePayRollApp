let employeePayrollList;

window.addEventListener("DOMContentLoaded", (event) => {
  employeePayrollList = getEmployeeFromStorage();
  console.log(employeePayrollList);
  createInnerHtml();
});

const getEmployeeFromStorage = () => {
  return localStorage.getItem("EmployeeList")
    ? JSON.parse(localStorage.getItem("EmployeeList"))
    : [];
};

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
  if (employeePayrollList.length == 0) return;
  let innerHtml = `${headerHtml}`;
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
       <img name="${
         employee._id
       }" onclick="remove(this)" alt="delete" src="../employeeAppjs/assests/icons/delete-black-18dp.svg">
       <img name="${
         employee._id
       }" alt="edit" onclick="update(this)" src="../employeeAppjs/assests/icons/create-black-18dp.svg">
   </td>
</tr>
   `;
  }
  document.querySelector("#display").innerHTML = innerHtml;
};

function remove(employeePayrollList) {
  localStorage.removeItem(employeePayrollList);
}

const getDeptHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`;
  }
  return deptHtml;
};
