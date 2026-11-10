---
title: Platforms and products
description: Distinguish the build host, target, product, and managed deployment.
uid: platforms.home
kind: explanation
---
# Platforms and products

A platform provides system and SDK integration. A target identifies the intended architecture and ABI. A product selects an Editor or Player composition. These choices remain separate from the host running the build tools.

## Current target families

| Target | Source organization | Important boundary |
| --- | --- | --- |
| `windows-x64` | Windows and WindowsX64 | Desktop product preparation uses the selected Windows SDK and native toolchain. |
| `macos-arm64` | MacOSArm64 | Native ARM64 SDK/toolchain and platform surface/lifecycle integration. |
| `browser-wasm` | BrowserWasm32 | Explicit wasm32 publishing and managed deployment requirements. |

This table describes registered source targets, not certification of every device, graphics API, or deployment combination. `Desktop` is not a target identifier.

## Editor and Player preparation

Starting the desktop Editor prepares its own product closure. It does not automatically publish a Player support pack or install an unrelated browser workload.

Player publishing selects the supported target and managed deployment explicitly. A package producer must verify its SDK, component inputs, generated bindings, and immutable artifacts before publishing them.

## Backend selection

Products select registered backend capabilities and platform integrations. Shared services do not choose concrete implementations from the host operating system. Review [backend boundaries](../backends/index.md) and the selected product's actual acceptance evidence before claiming support.
