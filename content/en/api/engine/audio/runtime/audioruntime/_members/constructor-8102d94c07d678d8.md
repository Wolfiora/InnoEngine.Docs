---
uid: api.8102d94c07d678d81c1c28749df1c33fa1b3d195b3f9331e02cc0f9d1afa50a7
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Audio.IAudioDevice,Inno.Assets.IAssetArtifactLookup,Inno.Core.Events.EventDispatcher,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Audio.Runtime.AudioRuntimeOptions,System.Func{Inno.References.ContentReadScope},System.Func{Inno.Audio.IAudioDevice})"
source: xml
reviewed: 143a4404e0cbebfa0aa01ff401961748296caab8e27145d5b41b3ec6102e87a4
title: "Constructor"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Creates an audio runtime over one backend device generation.

**Parameter `types`:** Type catalog used for mixer and content-provider discovery.

**Parameter `device`:** Backend device whose ownership transfers to this runtime.

**Parameter `artifacts`:** Lookup for verified immutable `audio-data` artifacts.

**Parameter `events`:** Main-thread event dispatcher that receives voice completion events.

**Parameter `diagnostics`:** Required owner-bound diagnostic producer.

**Parameter `options`:** Optional bounded runtime resource policies.

**Parameter `contentScopeProvider`:** Optional callback that supplies update-scoped host content without coupling Runtime to Scene.

**Parameter `deviceRecoveryFactory`:** Optional host factory used to retry a real output device at main-thread update safety points.

**Exception `T:System.ArgumentNullException`:** A required device, catalog, artifact lookup, event dispatcher, or diagnostic reporter is null.

**Exception `T:System.ArgumentOutOfRangeException`:** A voice, preload, or content limit is not positive, a byte budget is negative, or the recovery delay is invalid.
