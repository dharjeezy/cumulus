window.SIDEBAR_ITEMS = {"struct":[["AssetsFrom","Asset filter that allows all assets from a certain location."],["AssetsToBlockAuthor","A `HandleCredit` implementation that naively transfers the fees to the block author. Will drop and burn the assets in case the transfer fails."],["CheckingAccount",""],["CommonGoodAssetsLocation",""],["CommonGoodAssetsPalletLocation",""],["CommonGoodAssetsParachain",""],["MaxAssetsIntoHolding",""],["MaxInstructions",""],["MultiNativeAsset","A `FilterAssetLocation` implementation. Filters multi native assets whose reserve is same with `origin`."],["NonZeroIssuance","Allow checking in assets that have issuance > 0."],["ParentOrParentsExecutivePlurality",""],["RelayChainOrigin",""],["RelayLocation",""],["RelayNetwork",""],["UnitWeightCost",""],["UniversalLocation",""],["XcmConfig",""]],"trait":[["Reserve",""]],"type":[["AccountIdOf","Type alias to conveniently refer to `frame_system`’s `Config::AccountId`."],["AssetTransactors","Means for transacting assets on this chain."],["Barrier",""],["CurrencyTransactor","Means for transacting assets on this chain."],["FungiblesTransactor","Means for transacting assets besides the native currency on this chain."],["LocalOriginToLocation","No local origins on this chain are allowed to dispatch XCM sends/executions."],["LocationToAccountId","Type for specifying how a `MultiLocation` can be converted into an `AccountId`. This is used when determining ownership of accounts for asset transacting and when attempting to use XCM `Transact` in order to determine the dispatch Origin."],["Reserves",""],["XcmOriginToTransactDispatchOrigin","This is the type we use to convert an (incoming) XCM origin into a local `Origin` instance, ready for dispatching a transaction with Xcm’s `Transact`. There is an `OriginKind` which can biases the kind of local `Origin` it will become."],["XcmRouter","The means for routing XCM messages which are not for local execution into the right message queues."]]};