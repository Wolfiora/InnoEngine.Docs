---
uid: api.275ac62bff2cf06a4573f9833eacb46498e1def6db0ee57aeff612f85d010ad7
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetDraftDocuments\u00601.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Editor.Interactions.EditorInteractions,System.String,System.String,System.String,System.String)"
source: xml
reviewed: 6e5601341a01b6f8219ae3c728d616cba5195e6139fb02dc26daa7dcb74d4063
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates a feature-owned draft store; call Start after document services become available.

**Parameter `assets`:** Owner of source identities, serialization and import.

**Parameter `serialization`:** Host registry for neutral History and recovery records.

**Parameter `interactions`:** Shared documents and History services.

**Parameter `providerId`:** Stable unique document provider identifier.

**Parameter `historyKind`:** Stable protocol handled by the feature's registered History handler.

**Parameter `extension`:** Native source extension including its leading dot.

**Parameter `label`:** Human-readable singular asset kind.
