---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.03e9f97e11b588e5afdc2d6c2664eb2f9833ee6ce6034488143f1f20d6ff5bd7
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Serialize``1(``0)
title: AssetSerializationServices.Serialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: c1e6397ae77c436d650d7adf04f3a5c1ce3e71fbaaf23e18df54006362a4cc1d
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The serializable value contract.

## Parameters

**Parameter `value`:** The value to serialize through the active converter generation.

## Returns

Deterministic structured bytes owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.
