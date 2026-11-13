---
title: Inno.Build.Bindings
description: "The engine's replaceable BGCS integration behind neutral generation contracts."
uid: project.inno-build-bindings
kind: project
owners: [Inno.Build.Bindings]
exampleMode: host
exampleProjects: [Inno.Build.Bindings]
---
# Inno.Build.Bindings

The engine's replaceable BGCS integration behind neutral generation contracts.

Read the linked task or ownership explanation before using the exact API below.

## Integration boundary

NativeBindingGenerator implements INativeBindingGenerator using the official BGCS library. Toolchains, platform modules and Support Packs borrow that neutral service; Tasks adapt it without owning another generation pipeline. The generator library never enters Player runtime. This is engine integration documentation, not a reference for generated bindings or upstream native APIs.

Each component's Bindings/bindings.props owns its ID and shared configuration. Platform NativeBindingProfile supplies ABI, managed runtime and optional official import mode. SDK selection freezes compiler/sysroot/system includes/macros/arguments. Shared component configuration contains no platform table, executable expressions or custom environment substitution. Unsupported or escaping input fails.

## Frozen batch and output lifetime

Freeze the components, target, output mode, CheckOnly intent and expected fingerprint. Materialize selected configuration/inheritance and extension inputs, acquire generation leases in canonical path order, freshly verify the complete batch, execute official C/C++ frontend generation, verify produced manifests, then check freshness/cancellation before returning the complete closure. Failure never returns a partial mapping.

NativeBindingGenerationResult owns every generated output's protection. A descriptor/path alone does not keep it alive. HostSource retains its mutable component-generation owner through consumption; immutable target artifacts allow independent readers and require exclusive access for repair/retirement. Canceling one waiter does not release another reader.

## Identity and initialization

Fingerprint configuration-object keys use ordinal order; arrays preserve semantic order. Component inputs, selected SDK/tools/extensions and actual generator content remain included. The engine generator implementation uses its generated content identity, compiler, TFM, language, defines and relevant options; relocating DLL/PDB output alone does not invalidate it. Each lock-wait/publication phase still revalidates actual inputs.

usesRuntimeImports records the generated initialization contract independently from Native library kind. Runtime imports use generated Create; provider initialization uses the selected static/dynamic route. Managed compilation and Native deployment must agree on that explicit selection, never guess from a filename or target name.

## Official host assets and output modes

BGCS packages are pinned through the repository package declarations. WorkerAssetLocator uses the loaded SDK deployment base and official frontend-factory extension; private Task hosts do not borrow MSBuild's application base, unpack workers manually or copy undocumented SDK internals. Browser support is explicitly registered through the official extension rather than activated by package presence alone.

HostSource owns the component Generated/Bindings.cs and Native/Generated outputs. TargetArtifacts publishes component/target/fingerprint generations with complete manifests. CheckOnly compares an isolated candidate without modifying current output. Generator workspaces are build artifacts, not authoring source. Tool runtime assets follow the selected SDK host RID, independently of the game target. See [Native preparation](../native-preparation.md) for consumption, SDK and deployment ordering.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;

public static class HostExample1
{
    static async ValueTask PrepareAsync(
        INativeBindingGenerator generator,
        NativeBuildContext context,
        NativeBindingGenerationRequest request,
        CancellationToken cancellation
    ) {
        using NativeBindingGenerationResult result =
            await generator.GenerateAsync(context, request, cancellation);
        foreach (NativeBindingGenerationDescriptor generation in result.Values)
        {
            // Compile, link or copy the selected outputs before disposing result.
            System.Console.WriteLine(generation.fingerprint);
        }
    }
}
```
```csharp
using System.Threading;
using System.Collections.Generic;
using System.Threading.Tasks;
using Inno.Build.Bindings;
using Inno.Build.Toolchains;

public static class HostExample2
{
    static async ValueTask InspectBindingsAsync(
        string engineRoot,
        NativeToolchainSelection selectedTools,
        NativeBindingProfile profile,
        IReadOnlyList<NativeComponentDescriptor> components,
        CancellationToken cancellationToken
    ) {
        NativeBuildContext operation = new NativeBuildContext(engineRoot, "release")
            .WithToolchain(selectedTools)
            .WithBindingGenerator(new NativeBindingGenerator(profile));
        using NativeBindingGenerationResult generations =
            await NativeBindingPreparation.PrepareAsync(
                operation, components, cancellationToken);
        foreach (NativeBindingGenerationDescriptor generation in generations.Values)
            System.Console.WriteLine(generation.bindingsPath);
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/bindings/Inno.Build.Bindings/Inno.Build.Bindings.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../../api/engine/build/bindings/index.md).
