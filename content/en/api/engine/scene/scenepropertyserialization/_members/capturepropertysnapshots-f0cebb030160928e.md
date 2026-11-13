---
uid: api.f0cebb030160928e3ae2b4cf4755f2e2925272cec11e798a15c70198e73ec93d
symbol: "engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.CapturePropertySnapshots(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 571488dc3ee4d5b26f765604f1fbcbecac9b2ae0a7cb79e1d5053a4b8281ffa3
title: "CapturePropertySnapshots"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures each persistent property independently while preserving scene-reference identities.

**Parameter `target`:** Live scene object whose properties should be captured.

**Parameter `serialization`:** Registry owning the active converter generation.

**Parameter `assets`:** Resolver used to preserve canonical asset references.

**Returns:** Stable ordered property snapshots suitable for compact delta comparison.
