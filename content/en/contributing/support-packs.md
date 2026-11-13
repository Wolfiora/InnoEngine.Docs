---
title: Prepare and consume a Player Support Pack
description: Separate reusable engine link inputs from a game's final content
  and deployment.
uid: contributing.support-packs
kind: how-to
owners:
  - Inno.Build.SupportPacks.Core
  - Inno.Build.Managed
  - Inno.Build.Products.Standard
  - Inno.Build.Composition
contracts:
  - project.inno-build-supportpacks-core
  - project.inno-build-managed
  - project.inno-build-products-standard
  - project.inno-build-composition
---
# Prepare and consume a Player Support Pack

A Support Pack supplies the engine references, Native inputs and PlayerLink material required for one supported target. It does not contain your game's assets, gameplay scripts or final distributable directory. Several matching game builds can borrow the same verified immutable Pack.

## Select the actual target

Choose a target contributed by the active distribution, then prepare it through the Build entry:

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- support-pack --target windows-x64
```

Replace the target with a genuinely registered and supported one. The host must have its required SDK and tools; registration alone does not install them. Support Pack preparation defaults to Release unless explicitly overridden.

The source validates source/template/SDK/host requirements before returning a frozen plan. Planning has no output directory. Missing SDK, cancellation, an empty plan or a target mismatch must fail before publishing output.

## Understand reuse before diagnosing a rebuild

The preparation identity combines the source recipe, binding configuration/inheritance, generator extensions, actual managed SDK graph, templates and platform validator. The published artifact identity separately describes the complete Pack file set and bytes.

After obtaining its write lease, the publisher rechecks frozen inputs and looks up that preparation identity. A valid complete Pack returns with reading protection without running the producer. Missing, extra or tampered output requires preparation again. A directory existing at the expected path is insufficient.

A prepared self-contained Pack does not require its rebuildable Native/Binding workspaces to remain present. Keeping a reusable compiler workspace and keeping a published Pack are separate ownership decisions.

## Know what cold preparation does

The preparation implementation executes its declared Native plan, keeps that result protected during the Player managed build, copies engine references and Native inputs, captures actual Player source/templates, and invokes the platform validator. Only then may the publisher select the complete immutable Pack.

Managed compilation and PlayerLink extraction consume the same fixed source snapshot. Offline Shader tools keep their own validated source/artifact owner through the frozen InnoShaderToolSourceRoot selection; a copied managed source tree does not start another BGFX-tools cache.

NativeAOT and Web AOT still require final game-code compilation/linking. A Support Pack can avoid repeating engine preparation; it cannot replace the game's own content build, script checks or final deployment.

## Keep the publication alive while consuming it

The publication owns its reading protection. Keep it alive through compilation, linking and copying, then release it. A descriptor or copied path does not extend that lifetime. Catalog acquisition validates both content and platform requirements before returning a separate lease.

Failures before commit preserve the previous complete selection. Post-commit index or staging-cleanup diagnostics are reported separately; they do not mean that a successfully selected artifact never existed. Never overwrite a live generation or delete its lock to force cleanup.

See [immutable build artifacts](../architecture/build-artifacts.md), [platform selection](../platforms/select-target.md) and [product acceptance](product-journeys.md). Pack integrity proves matching input/output ownership, not execution on a physical device.
