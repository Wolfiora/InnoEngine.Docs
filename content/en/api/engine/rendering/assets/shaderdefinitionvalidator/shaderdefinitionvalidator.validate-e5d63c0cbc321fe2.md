---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e5d63c0cbc321fe294e267aa5194a442ae1001c0d9a6a34237ebfd429a19ed09
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderDefinitionValidator.Validate(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.GraphicsCapabilities)
title: ShaderDefinitionValidator.Validate
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 963e774dd169ebe0213dc93eeb60edac991b5c79a5d12bd9574da4ecce7f12e3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The candidate runtime contract.

**Parameter `capabilities`:** Optional device capabilities; unsupported optional passes produce warnings.

## Returns

Immutable diagnostics; an empty collection indicates a valid declaration contract.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The definition is null.
