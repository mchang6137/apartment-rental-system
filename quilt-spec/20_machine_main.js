const quilt = require('@quilt/quilt');
const nodeServer = require('./nodeServer1PM.js');
const utils = require('./utils.js');

const deployment = quilt.createDeployment({namespace: "mchang6137-apt-c3", adminACL: ['0.0.0.0/0']});

var machine0 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
});

var machine1 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 15,
});

var machine2 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 16,
});

var machine3 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 17,
});

var machine4 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 18,
});

var machine5 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 19,
});

var machine6 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 20,
});

var machine7 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 21,
});

var machine8 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 22,
});

var machine9 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 23,
});

var machine10 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 24,
});

var machine11 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 25,
});

var machine12 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 26,
});

var machine13 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 27,
});

var machine14 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 28,
});

var machine15 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 29,
});

var machine16 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 30,
});

var machine17 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 31,
});

var machine18 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 32,
});

var machine19 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 33,
});

var machine20 = new quilt.Machine({
    provider: "Amazon",
    size: "m4.large",
    diskSize: 34,
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
utils.addSshKey(machine11);
utils.addSshKey(machine12);
utils.addSshKey(machine13);
utils.addSshKey(machine14);
utils.addSshKey(machine15);
utils.addSshKey(machine16);
utils.addSshKey(machine17);
utils.addSshKey(machine18);
utils.addSshKey(machine19);
utils.addSshKey(machine20);

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
deployment.deploy(machine11.asWorker());
deployment.deploy(machine12.asWorker());
deployment.deploy(machine13.asWorker());
deployment.deploy(machine14.asWorker());
deployment.deploy(machine15.asWorker());
deployment.deploy(machine16.asWorker());
deployment.deploy(machine17.asWorker());
deployment.deploy(machine18.asWorker());
deployment.deploy(machine19.asWorker());
deployment.deploy(machine20.asWorker());

// Needs to be six machines! (Temporary)
apartmentApp.machPlacements([15, 16, 17, 18, 19, 20, 21, 22, 23,24,25,26,27,28,29,30,31,32,33,34]);

deployment.deploy(apartmentApp);
