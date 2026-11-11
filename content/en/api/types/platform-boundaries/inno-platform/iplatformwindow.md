---
title: "IPlatformWindow"
description: "Reference for IPlatformWindow in Inno.Platform."
uid: api.inno.platform.7895aefc5837fac5
kind: api
owners:
  - Inno.Platform
apiSurface: source-clr
contracts:
  - project.inno-platform
---
# `IPlatformWindow`

This reference describes `IPlatformWindow` in `Inno.Platform`. Read the [shared contract](../../../projects/inno-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`RequestClose`](#api-a94f61659f5580ee) | Method |
| [`height`](#api-c229cf29773defc5) | Property |
| [`isClosed`](#api-147e739a87694d51) | Property |
| [`isFocused`](#api-842a7f0164f7fc41) | Property |
| [`pixelHeight`](#api-f5d693043f934321) | Property |
| [`pixelWidth`](#api-f959b252ef9332db) | Property |
| [`title`](#api-ddaacf8fa44ff4c7) | Property |
| [`width`](#api-14cd4118f9481def) | Property |
| [`windowId`](#api-f09157c3208a9cf9) | Property |

## Type declaration

<a id="api-7895aefc5837fac5"></a>
<!-- api: T:Inno.Platform.IPlatformWindow 25b505eb1978162e7bd213c903f06f51545c9ce0e673ab11b64c229e7039770d -->

```csharp
public interface Inno.Platform.IPlatformWindow : System.IDisposable
```

Represents a backend-neutral native window owned by a platform application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L8).

## `RequestClose`

<a id="api-a94f61659f5580ee"></a>
<!-- api: M:Inno.Platform.IPlatformWindow.RequestClose 335c840ec205bdff18b42f43c56335bca532606699fb2c3766b14d589779c8fb -->

```csharp
void Inno.Platform.IPlatformWindow.RequestClose()
```

Marks the window as requesting closure without destroying it immediately.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L53).

## `height`

<a id="api-c229cf29773defc5"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.height 1d204722c997a97aa8ff6d12b7b51e1b3ec32d626c4062dea1fb6aeafe43aa16 -->

```csharp
int Inno.Platform.IPlatformWindow.height { get; }
```

Gets the logical client height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L28).

## `isClosed`

<a id="api-147e739a87694d51"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.isClosed 96921df2d0d4fe2da199135d5996a126759bb37ff626044995666b0fcaf5219e -->

```csharp
bool Inno.Platform.IPlatformWindow.isClosed { get; }
```

Gets whether the window has received or requested a close operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L43).

## `isFocused`

<a id="api-842a7f0164f7fc41"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.isFocused 04926ba655ff7ee838c703af63f656f5c733d97b5d20ed46466b5e6009add358 -->

```csharp
bool Inno.Platform.IPlatformWindow.isFocused { get; }
```

Gets whether the window currently owns platform input focus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L48).

## `pixelHeight`

<a id="api-f5d693043f934321"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.pixelHeight 2e7494b7e43815d5b493a73d007107039812be61c256c2a33c60c6055528880e -->

```csharp
int Inno.Platform.IPlatformWindow.pixelHeight { get; }
```

Gets the drawable height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L38).

## `pixelWidth`

<a id="api-f959b252ef9332db"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.pixelWidth 15f6f2065802c169a951e1fc816e00da0747e49c39a13daa59487ea002ad867f -->

```csharp
int Inno.Platform.IPlatformWindow.pixelWidth { get; }
```

Gets the drawable width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L33).

## `title`

<a id="api-ddaacf8fa44ff4c7"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.title fb68cd2b4b13f070f7468db56f11e0ce5deaeb069c4facfe8bae3c19c61fe124 -->

```csharp
string Inno.Platform.IPlatformWindow.title { get; }
```

Gets the title captured when the window was created.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L18).

## `width`

<a id="api-14cd4118f9481def"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.width aa3b06f75a12cd3225078e24346ca673ee08af5f9dc275aa8f6de37b575ad1d4 -->

```csharp
int Inno.Platform.IPlatformWindow.width { get; }
```

Gets the logical client width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L23).

## `windowId`

<a id="api-f09157c3208a9cf9"></a>
<!-- api: P:Inno.Platform.IPlatformWindow.windowId ca3c238e2d9312b985edc8809282ec91dd4429b54b92c32afb38b8f0ca64e4ae -->

```csharp
uint Inno.Platform.IPlatformWindow.windowId { get; }
```

Gets the application-local identifier of this window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/platform/Inno.Platform/IPlatformWindow.cs#L13).
