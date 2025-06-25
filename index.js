const Apify = require('apify');
const { log } = Apify;

Apify.main(async () => {
    log.info('🚀 Actor started successfully');

    const input = await Apify.getInput();
    if (!input || !input.hospitals || !Array.isArray(input.hospitals) || input.hospitals.length === 0) {
        log.warning('⚠️ No valid hospital input provided. Exiting early.');
        return;
    }

    const hospitals = input.hospitals;

    for (const hospital of hospitals) {
        log.info(`🔍 Would scrape: ${hospital.hospitalName} - ${hospital.website}`);
    }

    log.info('✅ Actor finished with no errors.');
});
