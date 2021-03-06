> **[@directus/sdk-js](../README.md)**

[Globals](../README.md) / ["Configuration"](../modules/_configuration_.md) / [Configuration](_configuration_.configuration.md) /

# Class: Configuration

Configuration holder for directus implementations

**`author`** Jan Biasi <biasijan@gmail.com>

## Hierarchy

* **Configuration**

## Implements

* [IConfiguration](../interfaces/_configuration_.iconfiguration.md)

### Index

#### Constructors

* [constructor](_configuration_.configuration.md#constructor)

#### Properties

* [internalConfiguration](_configuration_.configuration.md#private-internalconfiguration)
* [storage](_configuration_.configuration.md#private-optional-storage)

#### Accessors

* [localExp](_configuration_.configuration.md#localexp)
* [mode](_configuration_.configuration.md#mode)
* [persist](_configuration_.configuration.md#persist)
* [project](_configuration_.configuration.md#project)
* [token](_configuration_.configuration.md#token)
* [tokenExpirationTime](_configuration_.configuration.md#tokenexpirationtime)
* [url](_configuration_.configuration.md#url)

#### Methods

* [dehydrate](_configuration_.configuration.md#dehydrate)
* [dehydratedInitialConfiguration](_configuration_.configuration.md#private-dehydratedinitialconfiguration)
* [deleteHydratedConfig](_configuration_.configuration.md#deletehydratedconfig)
* [hydrate](_configuration_.configuration.md#hydrate)
* [partialUpdate](_configuration_.configuration.md#partialupdate)
* [reset](_configuration_.configuration.md#reset)
* [update](_configuration_.configuration.md#update)

#### Object literals

* [defaults](_configuration_.configuration.md#static-defaults)

## Constructors

###  constructor

\+ **new Configuration**(`initialConfig`: [IConfigurationOptions](../interfaces/_configuration_.iconfigurationoptions.md), `storage?`: [IStorageAPI](../interfaces/_configuration_.istorageapi.md)): *[Configuration](_configuration_.configuration.md)*

*Defined in [Configuration.ts:99](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L99)*

Creates a new configuration instance, will be used once for each directus instance (passing refs).

**`constructor`** 

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`initialConfig` | [IConfigurationOptions](../interfaces/_configuration_.iconfigurationoptions.md) |  {} as any | Initial configuration values |
`storage?` | [IStorageAPI](../interfaces/_configuration_.istorageapi.md) | - | Storage adapter for persistence  |

**Returns:** *[Configuration](_configuration_.configuration.md)*

## Properties

### `Private` internalConfiguration

• **internalConfiguration**: *[IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md)*

*Defined in [Configuration.ts:99](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L99)*

Saves the internal configuration values, **DO NOT modify** from the outside

___

### `Private` `Optional` storage

• **storage**? : *[IStorageAPI](../interfaces/_configuration_.istorageapi.md)*

*Defined in [Configuration.ts:107](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L107)*

Storage adapter for persistence

## Accessors

###  localExp

• **get localExp**(): *number | undefined*

*Defined in [Configuration.ts:172](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L172)*

**Returns:** *number | undefined*

• **set localExp**(`localExp`: number | undefined): *void*

*Defined in [Configuration.ts:176](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`localExp` | number \| undefined |

**Returns:** *void*

___

###  mode

• **get mode**(): *[AuthModes](../modules/_authentication_.md#authmodes)*

*Defined in [Configuration.ts:188](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L188)*

**Returns:** *[AuthModes](../modules/_authentication_.md#authmodes)*

• **set mode**(`mode`: [AuthModes](../modules/_authentication_.md#authmodes)): *void*

*Defined in [Configuration.ts:192](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`mode` | [AuthModes](../modules/_authentication_.md#authmodes) |

**Returns:** *void*

___

###  persist

• **get persist**(): *boolean*

*Defined in [Configuration.ts:180](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L180)*

**Returns:** *boolean*

• **set persist**(`persist`: boolean): *void*

*Defined in [Configuration.ts:184](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`persist` | boolean |

**Returns:** *void*

___

###  project

• **get project**(): *string*

*Defined in [Configuration.ts:162](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L162)*

**Returns:** *string*

• **set project**(`project`: string): *void*

*Defined in [Configuration.ts:166](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`project` | string |

**Returns:** *void*

___

###  token

• **get token**(): *string | undefined*

*Defined in [Configuration.ts:135](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L135)*

**Returns:** *string | undefined*

• **set token**(`token`: string): *void*

*Defined in [Configuration.ts:139](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*

___

###  tokenExpirationTime

• **get tokenExpirationTime**(): *number | undefined*

*Defined in [Configuration.ts:143](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L143)*

**Returns:** *number | undefined*

• **set tokenExpirationTime**(`tokenExpirationTime`: number): *void*

*Defined in [Configuration.ts:147](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`tokenExpirationTime` | number |

**Returns:** *void*

___

###  url

• **get url**(): *string*

*Defined in [Configuration.ts:154](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L154)*

**Returns:** *string*

• **set url**(`url`: string): *void*

*Defined in [Configuration.ts:158](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

## Methods

###  dehydrate

▸ **dehydrate**(): *[IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md) | undefined*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:235](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L235)*

**Returns:** *[IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md) | undefined*

___

### `Private` dehydratedInitialConfiguration

▸ **dehydratedInitialConfiguration**(`storage`: [IStorageAPI](../interfaces/_configuration_.istorageapi.md)): *[IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md)*

*Defined in [Configuration.ts:268](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | [IStorageAPI](../interfaces/_configuration_.istorageapi.md) |

**Returns:** *[IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md)*

___

###  deleteHydratedConfig

▸ **deleteHydratedConfig**(): *void*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:260](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L260)*

**Returns:** *void*

___

###  hydrate

▸ **hydrate**(`props`: [IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md)): *void*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:252](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L252)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md) |

**Returns:** *void*

___

###  partialUpdate

▸ **partialUpdate**(`config`: `Partial<IConfigurationValues>`): *void*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:212](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L212)*

Update partials of the configuration, behaves like the [update] method

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | `Partial<IConfigurationValues>` |   |

**Returns:** *void*

___

###  reset

▸ **reset**(): *void*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:224](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L224)*

Reset the whole confiugration and remove hydrated values from storage as well

**Returns:** *void*

___

###  update

▸ **update**(`config`: [IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md)): *void*

*Implementation of [IConfiguration](../interfaces/_configuration_.iconfiguration.md)*

*Defined in [Configuration.ts:202](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L202)*

Update the configuration values, will also hydrate them if persistance activated

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [IConfigurationValues](../interfaces/_configuration_.iconfigurationvalues.md) |   |

**Returns:** *void*

## Object literals

### `Static` defaults

### ▪ **defaults**: *object*

*Defined in [Configuration.ts:90](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L90)*

Defaults for all directus sdk instances, can be modified if preferred

**`type`** {IConfigurationDefaults}

###  mode

• **mode**: *"jwt"* = "jwt"

*Defined in [Configuration.ts:92](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L92)*

###  tokenExpirationTime

• **tokenExpirationTime**: *number* =  5 * 6 * 1000

*Defined in [Configuration.ts:91](https://github.com/direcuts/sdk-js/tree/master/Configuration.ts#L91)*