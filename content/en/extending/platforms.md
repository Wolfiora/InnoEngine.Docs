---
title: Compose portable product contributions
description: Bind shared engine contracts to explicit product capabilities without duplicating domain behavior.
uid: extending.platforms
kind: how-to
owners:
  - Inno.Build.Composition
  - Inno.Build.Toolchains
  - Inno.Build.Managed
contracts:
  - extending.build-distribution
  - architecture.ownership
---
# Compose portable product contributions

Shared engine features consume explicit services and capability contracts. A product supplies their implementations; domain code does not choose an operating system or repeat platform startup logic.

## Separate the responsibilities

- A target descriptor identifies the execution environment, architecture, ABI and supported products.
- A build-host descriptor identifies where SDK tools run.
- A managed deployment describes how compiled code is packaged and executed.
- A product binds the required service and backend catalogs to shared hosting.

These are separate selections. Replacing rendering, storage or a deployment compiler does not require copying Scene, Input or Editor behavior. See [build distribution](build-distribution.md) for the shared registration mechanism.

## Compose before execution

Freeze catalogs and configuration before admitting work. Give each dependency one owner, pass borrowed services explicitly and keep their owners alive until all consumers finish. Product preparation resolves real tools and inputs before publishing an immutable generation; consumers acquire read protection before deployment.

See [ownership](../architecture/ownership.md), [Support Packs](../contributing/support-packs.md) and [shader target contracts](shader-targets.md). A common contract does not guarantee that a particular device or backend supplies every capability.

## Preserve lifecycle behavior

Keep persistent and runtime identity distinct, retain Missing recovery and last-good state, and use the existing History or Workspace transaction for edits. Stop admission before retirement; pending or failed retirement is not successful release.

This guide covers portable composition interfaces. Implementing an OS package, SDK discovery, native window ABI, signing or a concrete platform product is outside the documentation scope. Existing platform implementation code remains unchanged.
