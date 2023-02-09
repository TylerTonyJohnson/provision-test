export default class JSONViewerData {
	constructor(x = 100, y = 100) {
		this.name = 'Doota';
		this.x = x;
		this.y = y;
		// this.contents = [
        //     true,
        //     6, 
        //     "Harold",
        //     [
        //         false,
        //         99,
        //         "Worship the ground",
        //         {
        //             name: 'Virgil',
        //             age: 7,
        //             married: false,
        //             cousins: [
        //                 'Tom',
        //                 'Marvolo',
        //                 'Riddle'
        //             ],
        //             consciousness: {
        //                 brain: true,
        //                 mind: true,
        //                 soul: false
        //             }
        //         }
        //     ]
        // ];
        this.contents = {
			entity: {
				keys: {
					orgId: 'Calix',
					customId: '2333500010',
					deviceName: 'virtualOLT',
					ontId: 'CXNK00B773A3',
					portId: 'G1',
					serviceName: '1G_Internet_Residential_U6X',
					industry: 'INTERNET',
					ontProfileId: 'GS4227'
				}
			},
			provisioningOrder: {
				agentName: 'CALIX_SMX_ANYPON',
				communicationServiceId: '1051',
				serviceOrderId: '9073016',
				billingId: '1051',
				billingIdVersion: 0,
				provisioningOrderType: 'CONNECT',
				keyChangeType: 'DISCONNECT_CONNECT',
				abort: false,
				multiEntity: false
			},
			agentServiceStatus: 'ACTIVE',
			agentName: 'CALIX_SMX_ANYPON',
			calixAnyPON: {
				industry: 'INTERNET',
				flowOptions: {
					createOnt: true,
					updateOnt: false,
					deleteOnt: false,
					unlinkOnt: false,
					deleteSubscriber: true,
					deviceSwapBasedOnNodeType: true,
					rebootOnt: false,
					rebootOntOnPolicyMapChange: false,
					disconnectTemporaryType: 'DISABLE_SERVICE',
					includeSubIdOnOnt: true,
					updateOntPort: true,
					clearOntSubscriberOnDisc: true,
					ontDescriptionOnDisc: '',
					globalDeviceName: 'virtualOLT'
				},
				ontPres: {
					ontId: 'CXNK00B773A3',
					ontType: 'Residential',
					isGlobalOnt: true,
					serialNumber: 'CXNK00B773A3',
					deviceName: 'Black_Lake_Shelf5',
					portId: 'G1',
					subscriberId: '2333500010',
					location: '7111 VEIHL RD',
					ontMacAddr: '84:D3:43:02:89:D6',
					operStatus: 'none',
					ontProfileId: 'GS4227',
					batteryPresent: false,
					rfAvo: { rfReturnPath: 'disable', shutdown: false },
					profileOverride: false,
					alarmSuppression: 'DISABLED',
					shutdown: false
				},
				subscriberPres: {
					name: 'GERALD T HILLIS JR',
					customId: '2333500010',
					type: 'Residential',
					orgId: 'Calix',
					locations: [
						{
							primary: true,
							address: [{ streetLine1: '7111 VEIHL RD', city: 'TOWER', state: 'MI', zip: '49792' }],
							contacts: [
								{
									firstName: 'GERALD',
									lastName: 'HILLIS',
									email: 'gthillis@gmail.com',
									primary: true
								}
							]
						}
					]
				},
				emsServicePres: {
					serviceType: 'DATA_SERVICE',
					inActive: false,
					changeGlobalVlan: true,
					changeGlobalCTag: false,
					aeontcard: false,
					poncard: false,
					deviceName: 'Black_Lake_Shelf5',
					ontPortId: 'G1',
					adminState: 'active',
					ontId: 'CXNK00B773A3',
					subscriberId: '2333500010',
					adminStatus: 'ACTIVE',
					globalVlanDesc: 'Residential_Internet',
					deleteService: false,
					rgMgmtProfile: 'PIEG_Connect',
					serviceName: '1G_Internet_Residential_U6X',
					callWaiting: false,
					callerId: false,
					threeWayCalling: false,
					t38FaxRelay: false,
					msgWaitingIndicator: false,
					gr303: false,
					address: '0.0.0.0/0',
					ping: true,
					traceroute: true,
					is10GECard: false,
					isAEONTCard: false,
					isPONCard: false
				},
				devOntPort: {
					deviceName: 'Black_Lake_Shelf5',
					subscriberId: '2333500010',
					ontId: 'CXNK00B773A3',
					ontPortId: 'G1',
					description: '',
					adminStatus: 'up',
					portType: 'RG',
					portModel: 'RG',
					alarmSuppression: 'DISABLED',
					serviceRole: 'uni',
					disableWhenOnBattery: 'true',
					mgmtMode: 'native',
					remoteAccessTime: '0'
				}
			}
		};
	}
}
