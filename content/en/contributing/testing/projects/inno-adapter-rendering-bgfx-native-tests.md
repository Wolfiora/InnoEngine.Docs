---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-rendering-bgfx-native-tests
symbol: project:Inno.Adapter.Rendering.Bgfx.Native.Tests
title: Inno.Adapter.Rendering.Bgfx.Native.Tests
kind: project
owners:
- Inno.Adapter.Rendering.Bgfx.Native.Tests
sourceFingerprint: c86777dd2dd328768b6059629834b8cdacd7af99adf82a7fe2e1789db22bd733
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Verify BGFX adapter commands, shaders, real surfaces and acknowledged retirement.
outdated: false
---
# Inno.Adapter.Rendering.Bgfx.Native.Tests

`Inno.Adapter.Rendering.Bgfx.Native.Tests` exercises the engine's managed rendering adapter against real native inputs. It includes Noop command tests, shader/tool contracts and actual window or device lifetimes; these provide different evidence.

## Commands, resources and color

Noop cases execute a graph and submit a frame, reset public command counters per frame, reject unsupported platform handles before native creation, and defer persistent texture destruction. Composition cases verify that the embedded target program matches the device backend and fullscreen layout.

Color cases require exactly one sRGB encoding across the default backbuffer and ImGui shader, and verify distributed texture/output-transfer bindings. These tests protect composition behavior that a successful native load alone cannot establish.

## Shader targets and offline tools

Profiles include dialect, defines and capabilities in their identity. Invalid or duplicate profiles fail before compiler creation. New targets and renderers use the public configuration boundary rather than a copied host-selection table.

The suite checks Metal ownership, Direct3D/Metal profiles sharing shader source, Browser WebGL requirements without compute, and the supported Windows Browser compilation path. Tools must come from explicit deployment; missing tools fail. Compiled OS declarations preserve Direct3D, desktop GLSL and host-specific cases as applicable or not applicable, not silently passing after an early return.

## Real surfaces and process isolation

Surface integrations validate their own ABI and role and require an explicitly borrowed integration. Multithreaded destruction is acknowledged after the following submission; inline mode uses the same conservative acknowledgment. Invalid integration fails before taking process ownership.

Win32 and Cocoa fixtures use their actual host integration. SDL/Cocoa window retirement runs through the test assembly's main-thread entry, calling the existing assertions and propagating failures and timeouts to xUnit. Noop and process-lifetime scenarios keep their own hosts. Single-thread BGFX process state cannot be initialized again after device shutdown, so required isolation must remain real.

The shutdown case uses `INNO_TEST_GRAPHICS_API` to select a stable device API identity, with the existing D3D11/Metal defaults. A Noop pass cannot substitute for that device workload.

## Deployment smoke test

`BgfxInitTests.InitAndShutdownShouldSucceed` initializes a one-pixel Noop renderer, checks that capabilities are available and the selected renderer is Noop, then shuts it down in cleanup. Noop initialization does not certify a physical GPU or a window surface. It is a native test of the deployed BGFX integration, not a reference for BGFX's generated binding API.

Tests consume the deployment index of the declared `player` product; they do not search a neighboring Editor output or repository cache for a DLL. Missing deployment fails acceptance. [Browse the pinned smoke test](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx.Native.Tests/BgfxInitTests.cs) and [engine integration boundary](../../../backends/projects/inno-native-bgfx.md).

## Required product and execution

The suite explicitly requests the `editor` native product. [The validation executor](../../validate-change.md#native-and-process-requirements) discovers isolation contracts from the assembly and passes the target and product properties. Product composition selects both embedded shaders and the binding target; a neutral SourceDebug adapter is not a replacement for the target window product.

Use the resulting deployment index. Missing libraries, SDKs or a required real window are failed or unavailable evidence. Keep original cleanup, frame and process assertions when filtering for diagnosis; do not maintain a second executable test-selection list in documentation.

For a direct Windows shader integration diagnosis from the engine checkout, pass the product's actual properties:

```powershell
$productProperties = (Resolve-Path 'platforms/WindowsX64/build/Inno.Build.WindowsX64/EditorProduct.props').Path
dotnet test tests/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx.Native.Tests/Inno.Adapter.Rendering.Bgfx.Native.Tests.csproj `
  -p:InnoNativeTarget=windows-x64 `
  -p:InnoToolTarget=windows-x64 `
  "-p:InnoProductBuildProperties=$productProperties"
```

The SDK deploys target dependencies into the test project's actual `TargetDir`; do not infer that directory from the target name. Native-call fixtures prepare the selected `ProductNativeBuildPlan` through `ProductNativeDeployment.InstallAsync`. On macOS, select the corresponding product properties and real host. These diagnostic commands do not replace the plan's process isolation or required device checks.

[Browse the pinned adapter fixtures](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx.Native.Tests).
