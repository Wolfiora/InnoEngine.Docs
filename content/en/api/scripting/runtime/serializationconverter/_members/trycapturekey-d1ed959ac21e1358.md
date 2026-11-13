---
uid: api.d1ed959ac21e135820d842295bfb76f7a6a757dd9a6e0e93ea6ac10beeb3e063
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationConverter\u00601.TryCaptureKey(\u00600,InnoEngine.Serialization.SerializationCaptureKeyBuilder)"
source: xml
reviewed: 3d23369050364cc99c7ac76e26a5c5c7d89bd15dde1ae1455fe04645d9e63b08
title: "TryCaptureKey"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
---

Optionally declares every input to a snapshot capture without writing data.

**Parameter `value`:** The current registered identity source.

**Parameter `key`:** The borrowed Core key builder, valid only during this synchronous callback.

**Returns:** True only when the complete output is covered; false retains ordinary authoritative capture.

## Remarks

This callback must be pure and complete. It runs only for CaptureSnapshot; ordinary Serialize never uses it. After a changed key, Core verifies the key again before publishing. Default converters do not opt in.
