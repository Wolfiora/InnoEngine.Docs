---
title: Native preparation cost tests
description: Measure real Windows native products without confusing warm reuse with cold builds.
uid: project.inno-build-nativeperformance-tests
kind: project
owners:
  - Inno.Build.NativePerformance.Tests
---
# Native preparation cost tests

`Inno.Build.NativePerformance.Tests` owns real Windows native-product cost acceptance. Its project declares the performance layer, the Windows environment and Editor native preparation. It is not an ordinary managed domain check or a substitute for macOS evidence.

## Workload and measurements

`ProductNativeCostTests` obtains the real Editor closure through `StandardBuildDistribution` and public toolchain contracts. ImGui/ImGuizmo builds retain their artifact assertions, serial-versus-batch producer comparison, zero native processes and binding generation on a qualified warm hit, reduced reads and a single batch-lock phase.

The suite records five independent warm samples as JSON in xUnit output, including timings and input statistics, retained with TRX. Preparation warms the workload first; the extended plan records cold builds separately. A cold run cannot be relabeled as a warm sample. There are no environment-variable early-return switches that turn omitted work into passing evidence.

## Selection and execution

Use [the unified plan](../validate-change.md), inspect the Windows product prerequisites and execute the selected performance checks. Ordinary domain changes and the daily functional matrix do not require this measurement. Build, native, reload, relevant test inputs and explicit extended acceptance can select it. On another host it is explicitly not applicable, without preparing this owner's Windows product.

Keep the machine, SDK, input identity, first failure and every produced sample. Do not replace the actual distribution with a copied backend list or a fake producer. These tests measure the declared products; they do not certify every device or long-running workload.

[Browse the pinned workload and project metadata](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/build/Inno.Build.NativePerformance.Tests).
