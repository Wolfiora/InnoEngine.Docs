---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.03e9f97e11b588e5afdc2d6c2664eb2f9833ee6ce6034488143f1f20d6ff5bd7
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Serialize``1(``0)
title: AssetSerializationServices.Serialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
reviewed: cd460daaed04e6ec7f954f5e881b00cb230d23028b080d40ebd3e841a364fac7
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Serializes one structured value and declares every encountered asset reference as a runtime dependency.

## Type parameters

**Type parameter `TValue`:** The serializable value contract.

## Parameters

**Parameter `value`:** The value to serialize through the active converter generation.

## Returns

Deterministic structured bytes owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.
