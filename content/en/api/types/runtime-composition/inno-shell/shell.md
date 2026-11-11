---
title: "Shell"
description: "Reference for Shell in Inno.Shell."
uid: api.inno.shell.22558ac0338c8e35
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `Shell`

This reference describes `Shell` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9dae1bb75d25e8ee) | Method |
| [`Dispose`](#api-4f92ebd105a9dd8c) | Method |
| [`DisposeProductResources`](#api-0afcc3f35a149915) | Method |
| [`InitializeAdapterResources`](#api-ff5efce6c57e8263) | Method |
| [`OnEvent`](#api-2848e5dfc35a8260) | Method |
| [`OnFrame`](#api-3ea128c5f877ad9d) | Method |
| [`OnPresentation`](#api-f74d4066262e2ab4) | Method |
| [`OnSmokeCompleted`](#api-c277b6de088bd144) | Method |
| [`OnStarting`](#api-1cdf456da8e889ce) | Method |
| [`OnStopping`](#api-c3d4da32b9e37f55) | Method |
| [`OnSuspensionChanged`](#api-6b58d695e0c0fc63) | Method |
| [`RequestExit`](#api-ad13774ad558bb6b) | Method |
| [`RunAsync`](#api-0a9848122f60aecc) | Method |
| [`ShouldExit`](#api-79ebc40b29c07515) | Method |
| [`UseHostPipeline`](#api-a4ff3089d98bce16) | Method |
| [`adapters`](#api-f46e011cc134a516) | Property |
| [`adapterSelection`](#api-ac46e218460f23d3) | Property |
| [`framePacing`](#api-c3a75a1147bf23de) | Property |
| [`hasCompletedFrame`](#api-112f747ecee94841) | Property |
| [`inputSource`](#api-43a4f0a65cac7b9e) | Property |
| [`options`](#api-8ec315d70c06ab16) | Property |
| [`platformApplication`](#api-4d400ea77609041e) | Property |
| [`primaryWindow`](#api-da52a3c016be6dff) | Property |
| [`renderDevice`](#api-062d39baa9b23133) | Property |
| [`state`](#api-1720c626f52a78df) | Property |

## Type declaration

<a id="api-22558ac0338c8e35"></a>
<!-- api: T:Inno.Shell.Shell 2e1b299bffe18896a53708727d5cc4d681faf5e111c71c97b3745c8b9cd9f4f8 -->

```csharp
public abstract class Inno.Shell.Shell : System.IDisposable
```

Owns the backend-neutral window, event pump, input source, rendering device, and host frame lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L22).

## `#ctor`

<a id="api-9dae1bb75d25e8ee"></a>
<!-- api: M:Inno.Shell.Shell.#ctor(Inno.Adapter.IAdapterCatalog,Inno.Shell.ShellOptions) e3354783cad0e91c5c9dc5148fcd8f1f11fa87342510fe9e666bba8b2db66609 -->

```csharp
protected Inno.Shell.Shell.Shell(Inno.Adapter.IAdapterCatalog adapterCatalog, Inno.Shell.ShellOptions options)
```

Creates the backend-neutral host resources shared by Player and Editor products.

**Parameter `adapterCatalog`:** Catalog that resolves explicit backend selections without leaking implementation types.

**Parameter `options`:** Primary-window and rendering policy.

**Throws `System.ArgumentNullException`:** Thrown when `adapterCatalog` or `options` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L59).

## `Dispose`

<a id="api-4f92ebd105a9dd8c"></a>
<!-- api: M:Inno.Shell.Shell.Dispose cc3e8c3b8038bef28f2290d3d0aebccf170f15c55c724da49989535e01771b44 -->

```csharp
public void Inno.Shell.Shell.Dispose()
```

Releases product resources followed by rendering, input, window, and platform resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L157).

## `DisposeProductResources`

<a id="api-0afcc3f35a149915"></a>
<!-- api: M:Inno.Shell.Shell.DisposeProductResources 446ea18ecdc9f8a0969a1a1b85660fe25a0185c5050ac3861716929cfb37f8e8 -->

```csharp
protected virtual void Inno.Shell.Shell.DisposeProductResources()
```

Releases resources owned by the derived product before common adapter resources are destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L387).

## `InitializeAdapterResources`

<a id="api-ff5efce6c57e8263"></a>
<!-- api: M:Inno.Shell.Shell.InitializeAdapterResources b60c7c1a341bbf3ec76561ebaa977853504e654767d094479e5a5867228c6492 -->

```csharp
protected void Inno.Shell.Shell.InitializeAdapterResources()
```

Creates common adapter resources after a derived product has prepared its non-window bootstrap state.

**Throws `System.InvalidOperationException`:** Thrown when common adapter resources are already initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L253).

## `OnEvent`

<a id="api-2848e5dfc35a8260"></a>
<!-- api: M:Inno.Shell.Shell.OnEvent(Inno.Core.Events.Event) ce91124a8094654892366a16200e6e992d45b18f7066383531bdf7f7ca1f1bc1 -->

```csharp
protected virtual void Inno.Shell.Shell.OnEvent(Inno.Core.Events.Event evnt)
```

Receives one backend-neutral platform event after shared input routing and close evaluation.

**Parameter `evnt`:** Event produced by the active platform adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L324).

## `OnFrame`

<a id="api-3ea128c5f877ad9d"></a>
<!-- api: M:Inno.Shell.Shell.OnFrame(Inno.Shell.ShellFrame) 1e92c2106911564849b01baea78f8a5d2b69aca3666f76fbbf063f4a50fe4af0 -->

```csharp
protected abstract void Inno.Shell.Shell.OnFrame(Inno.Shell.ShellFrame frame)
```

Advances one product-specific frame after all pending platform events have been dispatched.

**Parameter `frame`:** Immutable timing and identity for the current shell frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L356).

## `OnPresentation`

<a id="api-f74d4066262e2ab4"></a>
<!-- api: M:Inno.Shell.Shell.OnPresentation(Inno.Shell.ShellFrame) d6e2e3721fdc59730f785cdddce4832231c47b5b6171f9f30135e2f58329f81a -->

```csharp
protected virtual void Inno.Shell.Shell.OnPresentation(Inno.Shell.ShellFrame frame)
```

Submits product UI requests while the host output pipeline is open.

**Parameter `frame`:** The current application frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L364).

## `OnSmokeCompleted`

<a id="api-c277b6de088bd144"></a>
<!-- api: M:Inno.Shell.Shell.OnSmokeCompleted(System.Int32) 3729605297e0686e55765f673404bbb8f784475a28375bc9a4b2e83832eac288 -->

```csharp
protected virtual void Inno.Shell.Shell.OnSmokeCompleted(int frameCount)
```

Receives the final frame count only when a bounded smoke run reaches its requested frame limit.
Closing a window or requesting an earlier exit does not report smoke completion.

**Parameter `frameCount`:** Number of product frames completed by the smoke run.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L373).

## `OnStarting`

<a id="api-1cdf456da8e889ce"></a>
<!-- api: M:Inno.Shell.Shell.OnStarting ba6389851a50feec75596e9e1e2bb0ef2a27bfe402485a8ec6223a1503571058 -->

```csharp
protected virtual void Inno.Shell.Shell.OnStarting()
```

Runs once immediately before the common event and frame loop starts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L314).

## `OnStopping`

<a id="api-c3d4da32b9e37f55"></a>
<!-- api: M:Inno.Shell.Shell.OnStopping a32ada468d2be018084ddb6f22e8f12feb61daba2d3c9393c875c0a5614e70a0 -->

```csharp
protected virtual void Inno.Shell.Shell.OnStopping()
```

Runs once when the main loop is stopping while all product and adapter resources remain alive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L380).

## `OnSuspensionChanged`

<a id="api-6b58d695e0c0fc63"></a>
<!-- api: M:Inno.Shell.Shell.OnSuspensionChanged(System.Boolean) 6fcc5fdba928faf95201698852cfc07025a55ee2ccd14138bfa67b6791cb4fe9 -->

```csharp
protected virtual void Inno.Shell.Shell.OnSuspensionChanged(bool isSuspended)
```

Receives an effective application suspension change at an event-pump safety point.
Repeated notifications and changes that leave another suspension reason active do not invoke this hook.

**Parameter `isSuspended`:** Whether product frames and their clock are suspended after the change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L335).

## `RequestExit`

<a id="api-ad13774ad558bb6b"></a>
<!-- api: M:Inno.Shell.Shell.RequestExit 7e6dade4f23ad93e3cd4941e15018552967b4bf705c6a95f2c1aef64818ad989 -->

```csharp
protected void Inno.Shell.Shell.RequestExit()
```

Requests an orderly exit after the current event or frame callback completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L309).

## `RunAsync`

<a id="api-0a9848122f60aecc"></a>
<!-- api: M:Inno.Shell.Shell.RunAsync(Inno.Shell.IShellFrameDriver,System.Nullable{System.Int32},System.Threading.CancellationToken) ab4c50014e038b7102de4e7a2a06d0b9f36bfd196ad095b7979699a1c0752e55 -->

```csharp
public System.Threading.Tasks.Task<int> Inno.Shell.Shell.RunAsync(Inno.Shell.IShellFrameDriver driver, int? smokeFrameLimit = null, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Runs one shell lifecycle using an explicitly selected owner-thread frame driver.

**Parameter `driver`:** The host's scheduling policy; it must execute frames on their owning thread.

**Parameter `smokeFrameLimit`:** An optional positive frame count for bounded verification.

**Parameter `cancellationToken`:** Requests termination before the next frame.

**Returns:** Zero after orderly shutdown; lifecycle and scheduling failures propagate.

**Throws `System.ArgumentNullException`:** The frame driver is null.

**Throws `System.ArgumentOutOfRangeException`:** The smoke frame limit is not positive.

**Throws `System.InvalidOperationException`:** Adapter resources are missing or the shell has already run.

**Throws `System.OperationCanceledException`:** Scheduling was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L109).

## `ShouldExit`

<a id="api-79ebc40b29c07515"></a>
<!-- api: M:Inno.Shell.Shell.ShouldExit(Inno.Core.Events.Event) a26aaaf31d06b97a662345eaa8f6a170527d25d751c9a750723e1abf83a290fe -->

```csharp
protected virtual bool Inno.Shell.Shell.ShouldExit(Inno.Core.Events.Event evnt)
```

Determines whether one event requests orderly product shutdown.

**Parameter `evnt`:** Event produced by the active platform adapter.

**Returns:** `true` when the common loop should stop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L346).

## `UseHostPipeline`

<a id="api-a4ff3089d98bce16"></a>
<!-- api: M:Inno.Shell.Shell.UseHostPipeline(Inno.Runtime.RuntimeSubsystemPipeline) 2982d8e75a21f9e14613f67889a01404937ab29f02ca44c5b43a0632d8918e03 -->

```csharp
protected void Inno.Shell.Shell.UseHostPipeline(Inno.Runtime.RuntimeSubsystemPipeline pipeline)
```

Borrows the EngineHost-owned pipeline used for application-wide output and services.

**Parameter `pipeline`:** The started pipeline; its EngineHost remains responsible for retirement.

**Throws `System.InvalidOperationException`:** A host pipeline is already configured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L239).

## `adapters`

<a id="api-f46e011cc134a516"></a>
<!-- api: P:Inno.Shell.Shell.adapters 685c5f81dc4f4a2f67c317fb4b36f40f47dfe6012434e23bda04ead488477e39 -->

```csharp
protected Inno.Adapter.IAdapterCatalog Inno.Shell.Shell.adapters { get; }
```

Gets the implementation-neutral adapter catalog used by this product host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L185).

## `adapterSelection`

<a id="api-ac46e218460f23d3"></a>
<!-- api: P:Inno.Shell.Shell.adapterSelection 149801246b4b1ec9bdb93f8a4470e99c1eb1af6f95ad07082a3a15ea1e11a0a3 -->

```csharp
protected Inno.Adapter.AdapterSelection Inno.Shell.Shell.adapterSelection { get; }
```

Gets the immutable backend selection used by this product host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L190).

## `framePacing`

<a id="api-c3a75a1147bf23de"></a>
<!-- api: P:Inno.Shell.Shell.framePacing aff75d5888f97216a7517202f9fc4276f5d2b6c49998e6987cd629e561dc61de -->

```csharp
public Inno.Platform.FramePacingOptions Inno.Shell.Shell.framePacing { get; }
```

Gets the mutable presentation cadence applied at the next complete host frame.
Zero maximum frame rate means no software frame limit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L75).

## `hasCompletedFrame`

<a id="api-112f747ecee94841"></a>
<!-- api: P:Inno.Shell.Shell.hasCompletedFrame 61c64cc295ba6b45c1df882887bde86990b87b2a3b84a41dcca532d68971289d -->

```csharp
protected bool Inno.Shell.Shell.hasCompletedFrame { get; private set; }
```

Gets whether at least one complete product frame has run.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L228).

## `inputSource`

<a id="api-43a4f0a65cac7b9e"></a>
<!-- api: P:Inno.Shell.Shell.inputSource 406a8f5c4809880043b802dd3b0efe7c4844be442f124d7b2f37007c8f5768af -->

```csharp
protected Inno.Adapter.Input.IInputEventSource Inno.Shell.Shell.inputSource { get; }
```

Gets the shared input event source used to create isolated runtime-session backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L209).

## `options`

<a id="api-8ec315d70c06ab16"></a>
<!-- api: P:Inno.Shell.Shell.options 8d5bc50800743bcf2dd71fcfcc662efc5266079913aa364bd3d3ad1595344ddc -->

```csharp
protected Inno.Shell.ShellOptions Inno.Shell.Shell.options { get; }
```

Gets the immutable shell creation options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L223).

## `platformApplication`

<a id="api-4d400ea77609041e"></a>
<!-- api: P:Inno.Shell.Shell.platformApplication 4b4837a49659e2be2d403f289ec1371e54a2bdd4776b05938f44be5589bcc267 -->

```csharp
protected Inno.Platform.IPlatformApplication Inno.Shell.Shell.platformApplication { get; }
```

Gets the active backend-neutral platform application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L195).

## `primaryWindow`

<a id="api-da52a3c016be6dff"></a>
<!-- api: P:Inno.Shell.Shell.primaryWindow 526f3fd7cc4a0e4397842f868869128accf8f4daa57b63901a55230352013ff2 -->

```csharp
protected Inno.Platform.IPlatformWindow Inno.Shell.Shell.primaryWindow { get; }
```

Gets the active primary platform window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L202).

## `renderDevice`

<a id="api-062d39baa9b23133"></a>
<!-- api: P:Inno.Shell.Shell.renderDevice 770c9c453c3b715fe0b7b57ab964068207e00bea80bad998a262a03a5250f783 -->

```csharp
protected Inno.Rendering.IRenderDevice Inno.Shell.Shell.renderDevice { get; }
```

Gets the active backend-neutral rendering device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L216).

## `state`

<a id="api-1720c626f52a78df"></a>
<!-- api: P:Inno.Shell.Shell.state 15d0b3613866def3f409f74f7eeceba31f7f55007d4694212e3a7d47047a98ca -->

```csharp
public Inno.Shell.ShellState Inno.Shell.Shell.state { get; private set; }
```

Gets the current owner-thread lifecycle state, including suspension and failed retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/Shell.cs#L80).
