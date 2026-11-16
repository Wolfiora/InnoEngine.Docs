---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.03e9f97e11b588e5afdc2d6c2664eb2f9833ee6ce6034488143f1f20d6ff5bd7
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Serialize``1(``0)
title: AssetSerializationServices.Serialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: d894e42434dd3e4a5d5912dbf2830f51f3b061db66a8dfae5bec4492235a2cbd
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
