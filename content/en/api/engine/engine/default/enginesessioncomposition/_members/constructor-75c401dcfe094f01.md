---
uid: api.75c401dcfe094f019d214a156a80da4b3a21e0c7fe30891556b709d7ac31cee1
symbol: "engine:Inno.Engine.Default:M:Inno.Engine.Default.EngineSessionComposition.#ctor(Inno.Runtime.RuntimeSession,Inno.Adapter.IAdapterCatalog,Inno.Adapter.AdapterSelection,Inno.Adapter.Input.IInputEventSource,Inno.Assets.IAssetArtifactLookup,System.Func{Inno.Audio.AudioProjectSettings},System.Func{Inno.Storage.IApplicationStorage},Inno.Runtime.Contracts.IRuntimeSubsystemFactory)"
source: xml
reviewed: 1d02c14ea1db02a37b15929aeb3cac1e7d5ce95430477e5350f0d82a8caf42f8
title: "Constructor"
kind: api
owners: [Inno.Engine.Default]
apiSurface: source-clr
---

Captures the inputs borrowed during synchronous default subsystem construction.

**Parameter `session`:** The isolated owner receiving these subsystems.

**Parameter `adapters`:** The host's neutral adapter catalog.

**Parameter `selection`:** The user's backend selections interpreted only by adapter factories.

**Parameter `inputSource`:** The host input source used to create isolated session readers.

**Parameter `artifacts`:** The selected authoring or deployed artifact lookup.

**Parameter `audioSettings`:** The portable audio defaults, captured during factory activation.

**Parameter `audioOverride`:** An optional product-specific audio owner, such as Editor preview/Play isolation.

**Parameter `createStorage`:** The host factory transferring one isolated storage service to the session.
