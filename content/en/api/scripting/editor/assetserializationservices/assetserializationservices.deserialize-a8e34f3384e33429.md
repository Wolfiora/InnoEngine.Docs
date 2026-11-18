---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a8e34f3384e3342955dd34f9e9b0c5d37188e9daba8fd5a58f3385e2a6222ebb
symbol: scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Deserialize``1(System.ReadOnlySpan{System.Byte})
title: AssetSerializationServices.Deserialize
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: editor-script
sourceFingerprint: cd35db9aa01be305447a8d9f98c86b63de6c7b369734eeb555aacdcfc9f4c5d2
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

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

## Returns

A restored value owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.
