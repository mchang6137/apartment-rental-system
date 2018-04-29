const quilt = require('@quilt/quilt');
const nodeServer = require('./nodeServer2PM.js');
const utils = require('./utils.js');

const deployment = quilt.createDeployment({namespace: "mchang6137-apt-c3", adminACL: ['0.0.0.0/0']});

var machine0 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    preemptible: true,
});

var machine1 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 15,
    preemptible: true,
});

var machine2 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 16,
    preemptible: true,
});

var machine3 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 17,
    preemptible: true,
});

var machine4 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 18,
    preemptible: true,
});

var machine5 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 19,
    preemptible: true,
});

var machine6 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 20,
    preemptible: true,
});

var machine7 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 21,
    preemptible: true,
});

var machine8 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 22,
    preemptible: true,
});

var machine9 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 23,
    preemptible: true,
});

var machine10 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 24,
    preemptible: true,
});

utils.addSshKey(machine0);
utils.addSshKey(machine1);
utils.addSshKey(machine2);
utils.addSshKey(machine3);
utils.addSshKey(machine4);
utils.addSshKey(machine5);
utils.addSshKey(machine6);
utils.addSshKey(machine7);
utils.addSshKey(machine8);
utils.addSshKey(machine9);
utils.addSshKey(machine10);

var countNode = 3;
const nodeRepository = 'tsaianson/node-apt-app';
const apartmentApp = new nodeServer(countNode, nodeRepository);

deployment.deploy(machine0.asMaster());
deployment.deploy(machine1.asWorker());
deployment.deploy(machine2.asWorker());
deployment.deploy(machine3.asWorker());
deployment.deploy(machine4.asWorker());
deployment.deploy(machine5.asWorker());
deployment.deploy(machine6.asWorker());
deployment.deploy(machine7.asWorker());
deployment.deploy(machine8.asWorker());
deployment.deploy(machine9.asWorker());
deployment.deploy(machine10.asWorker());

// Needs to be six machines! (Temporary)
apartmentApp.machPlacements([15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

deployment.deploy(apartmentApp);
