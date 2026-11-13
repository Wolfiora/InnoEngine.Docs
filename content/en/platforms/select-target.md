---
title: Choose a platform and product
description: Separate the execution host, target, product and managed deployment before preparing output.
uid: platforms.select-target
kind: how-to
---
# Choose a platform and product

The machine running a build and the environment running the result are separate inputs. Select the desired capabilities explicitly instead of treating the host operating system as the entire build request.

## Make the selections

1. Select the execution host and its available SDK and tools.
2. Select the target's architecture, ABI and required capabilities.
3. Select an Editor or Player product and its actual component closure.
4. Select a managed deployment supported by that product.
5. Prepare the frozen request, then acquire protected access to its published artifacts before deployment.

The current source registers windows-x64, macos-arm64 and browser-wasm targets. This is an availability statement, not a claim that every host/target, device or graphics combination has passed acceptance. Browser supplies a Player rather than an Editor. Launching the Editor does not require preparing an unrelated Player distribution.

## Understand preparation

Creating a build contribution assembles registrations; it does not discover every SDK or start every build. Preparation resolves the chosen tools, source inputs, environment and component options. Missing prerequisites fail at that boundary.

Shared backends own their recipes; product contributions bind them to the selected target. Content compilers remain distinct from runtime rendering and input. A Player consumes published content rather than retaining its authoring compiler.

## Diagnose incompatible inputs

Check the host, target and managed deployment separately. Then inspect SDK discovery, the component closure and the artifact generation. A successful build for another configuration cannot certify these inputs.

Do not copy individual DLLs into an old pack or reuse an active build directory as a deployment. Failed or canceled preparation must preserve the previous complete generation. Follow [immutable build artifacts](../architecture/build-artifacts.md) and [build distribution](../extending/build-distribution.md) for shared producer and consumer contracts.
