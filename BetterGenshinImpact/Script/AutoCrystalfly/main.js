(async function() {
    log.info('�ȴ� {m} s', 1);
    await sleep(1000);
    log.info('���� {name}', 'TP����');
    await genshin.tp(3452.310059,2290.465088);
    log.warn('TP���');
    //await sleep(1000);
    //await runKeyMouseScript('����1.json');
})();