const browser = globalThis.browser || chrome;

function isRestrictedUrl( url ) {
	return url.startsWith( 'chrome://' ) || url.startsWith( 'about:' ) || url.startsWith( 'moz-extension://' );
}

async function checkDonateLink( tabId ) {
	try {
		const results = await browser.scripting.executeScript( {
			target: { tabId: tabId },
			func: () => document.querySelector( 'link[rel="donate"]' )?.href || null
		} );
		if ( results[0]?.result ) {
			browser.pageAction.show( tabId );
		}
	} catch ( e ) {}
}

browser.pageAction.onClicked.addListener( async ( tab ) => {
	const results = await browser.scripting.executeScript( {
		target: { tabId: tab.id },
		func: () => document.querySelector( 'link[rel="donate"]' )?.href || null
	} );
	const donateUrl = results[0]?.result;
	if ( donateUrl ) {
		browser.tabs.create( { url: donateUrl } );
	}
} );

browser.tabs.onUpdated.addListener( async ( tabId, changeInfo, tab ) => {
	if ( changeInfo.status === 'complete' && tab.url && !isRestrictedUrl( tab.url ) ) {
		checkDonateLink( tabId );
	}
} );

browser.tabs.onActivated.addListener( async ( { tabId } ) => {
	const tab = await browser.tabs.get( tabId );
	if ( tab.url && !isRestrictedUrl( tab.url ) ) {
		checkDonateLink( tabId );
	}
} );