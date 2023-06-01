document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault(),console.log("submit");const{elements:{email:l,password:t}}=e.currentTarget;if(""===l.value||""===t.value)return alert("Please fill in all the fields!");const n={[l.name]:l.value,[t.name]:t.value};console.log("formValue:",n),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.c41eeb9e.js.map
