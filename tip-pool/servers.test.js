describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should handle a lack of new server value', () => {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
    expect(allServers['server' + serverId]).toBeUndefined();
  });

  it('should confirm TDs added to the table', () => {
    submitServerInfo();
    serverNameInput.value = 'George';
    submitServerInfo();

    expect(serverTbody.children.length).toEqual(2);
  });

  afterEach(function () {
    allServers = {};
    serverNameInput.value = '';
  });
});
