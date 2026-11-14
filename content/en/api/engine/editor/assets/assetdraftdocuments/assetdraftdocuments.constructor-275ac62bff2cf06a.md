---
uid: api.275ac62bff2cf06a4573f9833eacb46498e1def6db0ee57aeff612f85d010ad7
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments\u00601.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Editor.Interactions.EditorInteractions,System.String,System.String,System.String,System.String)"
source: xml
reviewed: 9eeb8fb5da7da4a5636ddf38bf2287d21640a8dacc5c79b087dd5768d71571f3
title: "AssetDraftDocuments\u003CTAsset\u003E.Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates a feature-owned draft store; call Start after document services become available.

## Parameters

**Parameter `assets`:** Owner of source identities, serialization and import.

**Parameter `serialization`:** Host registry for neutral History and recovery records.

**Parameter `interactions`:** Shared documents and History services.

**Parameter `providerId`:** Stable unique document provider identifier.

**Parameter `historyKind`:** Stable protocol handled by the feature's registered History handler.

**Parameter `extension`:** Native source extension including its leading dot.

**Parameter `label`:** Human-readable singular asset kind.
