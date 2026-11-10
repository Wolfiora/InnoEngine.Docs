---
title: "InputBackendCatalog"
description: "Reference for InputBackendCatalog in Inno.Adapter.Input."
uid: api.inno.adapter.input.70d6c5d220114422
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `InputBackendCatalog`

This reference describes `InputBackendCatalog` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Adapter.Input.IInputBackendFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-28124222b3896e78) | Method |
| [`CreateEventSource`](#api-edb6793dd0618c6b) | Method |
| [`supportedBackends`](#api-3cf870c5ce461a9d) | Property |

## Type declaration

<a id="api-70d6c5d220114422"></a>
<!-- api: T:Inno.Adapter.Input.InputBackendCatalog 6f8e70e129b763b4b986055160e902a8fba83a45730332b68a101bc9712e23fd -->

```csharp
public sealed class Inno.Adapter.Input.InputBackendCatalog : Inno.Adapter.Input.IInputBackendFactory
```

Resolves input providers from one immutable, composition-owned registration snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendCatalog.cs#L11).

## `#ctor`

<a id="api-28124222b3896e78"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider}) 67213f7446bdc7a6577d9649fd9fab9361b5c83f28a51e74dc6f1dfe7eb8f6b1 -->

```csharp
public Inno.Adapter.Input.InputBackendCatalog.InputBackendCatalog(System.Collections.Generic.IEnumerable<Inno.Adapter.Input.InputBackendProvider> providers)
```

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Throws `System.ArgumentNullException`:** The provider sequence is null.

**Throws `System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendCatalog.cs#L27).

## `CreateEventSource`

<a id="api-edb6793dd0618c6b"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendId,Inno.Platform.IPlatformWindow,System.Boolean) 1d1c7749184d99984235513317883d170cfc289ccf13a0361805f51b00883669 -->

```csharp
public Inno.Adapter.Input.IInputEventSource Inno.Adapter.Input.InputBackendCatalog.CreateEventSource(Inno.Adapter.Input.InputBackendId backend, Inno.Platform.IPlatformWindow window, bool acceptAllWindows)
```

Creates an input event source for one window or for the entire application.

**Parameter `backend`:** input implementation selected by the composition root.

**Parameter `window`:** Primary platform window whose input is accepted by the source.

**Parameter `acceptAllWindows`:** Whether the source accepts events from every window owned by the application.

**Returns:** A caller-owned backend-neutral input event source.

**Throws `System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend or the platform is incompatible.

**Throws `System.InvalidOperationException`:** The selected provider returned no service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendCatalog.cs#L45).

## `supportedBackends`

<a id="api-3cf870c5ce461a9d"></a>
<!-- api: P:Inno.Adapter.Input.InputBackendCatalog.supportedBackends 58e91bc5680acfeba8970242ed706ced0759cad68df2dbdfa5154aae44fdea5e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Adapter.Input.InputBackendId> Inno.Adapter.Input.InputBackendCatalog.supportedBackends { get; }
```

Gets the exact registrations available in this composition snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendCatalog.cs#L39).
