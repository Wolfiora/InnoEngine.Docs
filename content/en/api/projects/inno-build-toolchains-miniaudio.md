---
title: Inno.Build.Toolchains.MiniAudio
description: Frozen MiniAudio source recipes and validated immutable native products.
uid: project.inno-build-toolchains-miniaudio
kind: project
owners:
  - Inno.Build.Toolchains.MiniAudio
contracts:
  - architecture.build-artifacts#keep-the-complete-result-alive
exampleMode: host
exampleProjects:
  - Inno.Build.Toolchains.MiniAudio
---
# Inno.Build.Toolchains.MiniAudio

This component owns the shared MiniAudio native recipe. It consumes an explicitly selected target, SDK and component options, then publishes a complete validated product through the common toolchain infrastructure. It does not choose another target from the current host or expose a separate daily executable.

## Describe and prepare a component

`CreateRecipe` declares source, build implementation, SDK and ordered options before compilation or binding generation. It borrows the prepared context; describing the recipe does not create staging directories, launch tools or read generated output. Fingerprinting still reads the real declared content.

This host helper belongs inside an existing build operation with a frozen context and selected binding generation:

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.MiniAudio;

public static class AudioComponentPreparation
{
    public static Task<NativeBuildProduct> PrepareAsync(
        NativeBuildContext preparedContext,
        CancellationToken cancellationToken
    ) {
        return MiniAudioToolchain.BuildAsync(preparedContext, cancellationToken);
    }
}
```

## Product ownership contract

Keep the selected inputs under reading protection for the entire compile. The returned `NativeBuildProduct` owns a consumer lease; dispose it after deployment or linking has finished. Normal product builds compose this work through their native plan, preparing identical frozen requests once while each consumer retains its own protection.

The component derives source and overlay paths from `context.engineRoot`, not its assembly location. Its immutable output identity includes configuration, target, source, compiler, SDK and recipe inputs. The producer uses the declared shared-library options; static products use the separate declared aggregate recipe rather than calling a standalone shared build with incompatible settings.

Cancellation drains tool work before publication. A failed or cancelled candidate is not a valid product, even if some reusable intermediate files exist. The final platform deployment validator must accept the complete closure before consumption.

## Build and upgrade workflow

Editor and Support Pack requests select their own product closures through the common CLI. This library does not start another component program. Native upgrades change the pinned source and regenerate bindings through the unified binding route, then rebuild the affected targets. Keep the generated managed and native ABI identities aligned.

See [build artifacts and caches](../../architecture/build-artifacts.md) for producer ownership and consumer leases, and [MiniAudio integration](inno-native-miniaudio.md#native-lifetime-contract) for dynamic/static boundaries.

## API reference

These contracts are build-tooling APIs and are not exported as gameplay script capabilities.

[Browse MiniAudio toolchain types](../types/toolchains-miniaudio/index.md).
