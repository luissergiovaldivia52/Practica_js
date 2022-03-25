executeLongRunningTask = async () => {
    const response = await fetch(this.taskUrl);
    return await response.json();
}

private taskUrls = [taskOneUrl, taskTwoUrl, taskThreeUrl];

executeLongRunningTask = async (url) => {
    return await fetch(url).then(response => response.json());
}

executeAllLongRunningTasks = async () => {
    return await Promise.all(taskUrls.map(this.executeLongRunningtask);
}

this.executeAllLongRunningTasks().then(console.log);

const tasks = await this.executeAllLongRunningTasks();
console.log(tasks);
