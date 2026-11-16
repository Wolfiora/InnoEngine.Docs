---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7bd59e995b34215accce379a0cbc168fb35695d6426b99d4cf50a0d892db7c08
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeManifestEnvelope.ReadApplicationId(System.ReadOnlySpan{System.Byte})
title: RuntimeManifestEnvelope.ReadApplicationId
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 39ef9f9c395444a7fabd66745a0fc0de482638887952533a80acd7a77e7c3022
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `data`:** The complete runtime manifest envelope.

## Returns

The stable application identity declared by the Player build.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when the envelope is truncated, malformed, or contains an invalid application identity.
