async function analyzeResume() {
    const file = document.getElementById("resumeFile").files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8080/api/resume/analyze", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("analysisResult").innerText =
        JSON.stringify(JSON.parse(data.analysis), null, 2);
}

async function checkATS() {
    const file = document.getElementById("atsFile").files[0];
    const jd = document.getElementById("jobDesc").value;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("jd", jd);

    const response = await fetch("http://localhost:8080/api/resume/ats-check", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("atsResult").innerText =
        JSON.stringify(JSON.parse(data.atsReport), null, 2);
}