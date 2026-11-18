---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d1ed959ac21e135820d842295bfb76f7a6a757dd9a6e0e93ea6ac10beeb3e063
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationConverter`1.TryCaptureKey(`0,InnoEngine.Serialization.SerializationCaptureKeyBuilder)
title: SerializationConverter<T>.TryCaptureKey
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
sourceFingerprint: 3b300a2eb7a92b3f1d8d1acd897188893a8000d74af5a68d5483283b4bac68b9
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

## Returns

True only when the complete output is covered; false retains ordinary authoritative capture.

## Remarks

This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it. After a changed key, Core verifies the key again before publishing. Default converters do not opt in.
