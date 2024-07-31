export const worldContract = [
    {
        type: 'function',
        name: 'abandonAsteroid',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'abandonFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'acceptRequestToJoin',
        inputs: [
            {
                name: 'accepted',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'addLiquidity',
        inputs: [
            {
                name: 'resourceA',
                type: 'uint8',
                internalType: 'enum EResource',
            },
            {
                name: 'resourceB',
                type: 'uint8',
                internalType: 'enum EResource',
            },
            {
                name: 'liquidityA',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'liquidityB',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'applyDamage',
        inputs: [
            {
                name: 'battleEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'attackingPlayer',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'defender',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'damage',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'attack',
        inputs: [
            {
                name: 'entity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'targetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'battleRaidResolve',
        inputs: [
            {
                name: 'battleEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'raider',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'target',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'build',
        inputs: [
            {
                name: 'buildingType',
                type: 'uint8',
                internalType: 'enum EBuilding',
            },
            {
                name: 'coord',
                type: 'tuple',
                internalType: 'struct PositionData',
                components: [
                    {
                        name: 'x',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'y',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'parentEntity',
                        type: 'bytes32',
                        internalType: 'bytes32',
                    },
                ],
            },
        ],
        outputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'buildRaidableAsteroid',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'changeHome',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'claimObjective',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'objective',
                type: 'uint8',
                internalType: 'enum EObjectives',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'claimPrimodium',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'claimResources',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'claimShardAsteroidPoints',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'claimUnits',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearFleetStance',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearMaxStorageIncrease',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearProductionRate',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearResources',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearUnits',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearUnitsAndResourcesFromFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'clearUtilityUsage',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'create',
        inputs: [
            {
                name: 'name',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'allianceInviteMode',
                type: 'uint8',
                internalType: 'enum EAllianceInviteMode',
            },
        ],
        outputs: [
            {
                name: 'allianceEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'createFleet',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'createSecondaryAsteroid',
        inputs: [
            {
                name: 'positionData',
                type: 'tuple',
                internalType: 'struct PositionData',
                components: [
                    {
                        name: 'x',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'y',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'parentEntity',
                        type: 'bytes32',
                        internalType: 'bytes32',
                    },
                ],
            },
        ],
        outputs: [
            {
                name: '',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'declineInvite',
        inputs: [
            {
                name: 'inviter',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'destroy',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'grantRole',
        inputs: [
            {
                name: 'target',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'role',
                type: 'uint8',
                internalType: 'enum EAllianceRole',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'increaseMaxStorage',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'level',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'increment',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'initAsteroidOwner',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'playerEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'invite',
        inputs: [
            {
                name: 'target',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'join',
        inputs: [
            {
                name: 'alliance',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'kick',
        inputs: [
            {
                name: 'target',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'landFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'leave',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'mergeFleets',
        inputs: [
            {
                name: 'fleets',
                type: 'bytes32[]',
                internalType: 'bytes32[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'moveBuilding',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'toCoord',
                type: 'tuple',
                internalType: 'struct PositionData',
                components: [
                    {
                        name: 'x',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'y',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'parentEntity',
                        type: 'bytes32',
                        internalType: 'bytes32',
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'payForMaxColonySlots',
        inputs: [
            {
                name: 'shipyardEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'paymentAmounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'bool',
                internalType: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'recallFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'receiveRewards',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'objectivePrototype',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'rejectRequestToJoin',
        inputs: [
            {
                name: 'rejectee',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'removeLiquidity',
        inputs: [
            {
                name: 'resourceA',
                type: 'uint8',
                internalType: 'enum EResource',
            },
            {
                name: 'resourceB',
                type: 'uint8',
                internalType: 'enum EResource',
            },
            {
                name: 'liquidityA',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'liquidityB',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'requestToJoin',
        inputs: [
            {
                name: 'alliance',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'resetFleetIfNoUnitsLeft',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'resolveBattleEncryption',
        inputs: [
            {
                name: 'battleEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'targetAsteroid',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'aggressorEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'resolveConquerColonyShip',
        inputs: [
            {
                name: 'asteroidTargetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'aggressorEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'revokeInvite',
        inputs: [
            {
                name: 'target',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'sendFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'position',
                type: 'tuple',
                internalType: 'struct PositionData',
                components: [
                    {
                        name: 'x',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'y',
                        type: 'int32',
                        internalType: 'int32',
                    },
                    {
                        name: 'parentEntity',
                        type: 'bytes32',
                        internalType: 'bytes32',
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'sendFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'setAllianceInviteMode',
        inputs: [
            {
                name: 'entity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'allianceInviteMode',
                type: 'uint8',
                internalType: 'enum EAllianceInviteMode',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'setAllianceName',
        inputs: [
            {
                name: 'entity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'newName',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'setFleetStance',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'stance',
                type: 'uint8',
                internalType: 'uint8',
            },
            {
                name: 'target',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'spawn',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'spendBuildingRequiredResources',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'level',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'spendUpgradeResources',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'upgradePrototype',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'level',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'swap',
        inputs: [
            {
                name: 'marketEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'path',
                type: 'uint8[]',
                internalType: 'enum EResource[]',
            },
            {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'amountOutMin',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'toggleBuilding',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [
            {
                name: 'isActive',
                type: 'bool',
                internalType: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'toggleBuildingUtility',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'toggleMarketplaceLock',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'toggleMaxStorage',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'toggleProductionRate',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'trainUnits',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unit',
                type: 'uint8',
                internalType: 'enum EUnit',
            },
            {
                name: 'count',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'trainUnits',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitPrototype',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'count',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferAsteroid',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'ownerEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferResourcesFromAsteroidToFleet',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferResourcesFromFleetToAsteroid',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferResourcesFromFleetToFleet',
        inputs: [
            {
                name: 'fromFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'toFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferResourcesTwoWay',
        inputs: [
            {
                name: 'leftEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'rightEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'resourceCounts',
                type: 'int256[]',
                internalType: 'int256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsAndResourcesFromAsteroidToFleet',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsAndResourcesFromFleetToAsteroid',
        inputs: [
            {
                name: 'fromFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsAndResourcesFromFleetToFleet',
        inputs: [
            {
                name: 'fromFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'toFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
            {
                name: 'resourceCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsAndResourcesTwoWay',
        inputs: [
            {
                name: 'leftEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'rightEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'int256[]',
                internalType: 'int256[]',
            },
            {
                name: 'resourceCounts',
                type: 'int256[]',
                internalType: 'int256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsFromAsteroidToFleet',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsFromFleetToAsteroid',
        inputs: [
            {
                name: 'fromFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsFromFleetToFleet',
        inputs: [
            {
                name: 'fromFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'toFleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferUnitsTwoWay',
        inputs: [
            {
                name: 'leftEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'rightEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unitCounts',
                type: 'int256[]',
                internalType: 'int256[]',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'uncheckedAbandonFleet',
        inputs: [
            {
                name: 'fleetEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'upgradeBuilding',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'upgradeProductionRate',
        inputs: [
            {
                name: 'buildingEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'level',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'upgradeRange',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'upgradeUnit',
        inputs: [
            {
                name: 'asteroidEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'unit',
                type: 'uint8',
                internalType: 'enum EUnit',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'wormholeDeposit',
        inputs: [
            {
                name: 'wormholeBaseEntity',
                type: 'bytes32',
                internalType: 'bytes32',
            },
            {
                name: 'count',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'renounceOwnership',
        inputs: [
            {
                name: 'namespaceId',
                type: 'bytes32',
                internalType: 'ResourceId',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'unregisterDelegation',
        inputs: [
            {
                name: 'delegatee',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'unregisterNamespaceDelegation',
        inputs: [
            {
                name: 'namespaceId',
                type: 'bytes32',
                internalType: 'ResourceId',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const;
