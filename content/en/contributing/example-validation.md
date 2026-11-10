---
title: Validate documentation examples
description: Compile canonical examples with explicit host or script references and retain precise failure evidence.
uid: contributing.example-validation
kind: how-to
owners: [Inno.Tooling.Architecture, Inno.Tooling.Documentation]
contracts: [contributing.documentation-queries]
---
# Validate documentation examples

Example validation checks the code a reader sees against the reference environment the page declares. It consumes the prepared documentation snapshot, so the website, local queries and compiler use the same code blocks and source locations.

Compilation proves that an example binds to the selected declarations. It does not prove runtime behavior, native availability, source compatibility or a successful user journey. Keep these acceptance results separate.

## Declare the reference context

Pages with executable C# declare their context in front matter:

```yaml
exampleMode: host
exampleProjects: [Inno.Editor.Core]
```

Use actual project identities from the pinned manifest. List the projects the example needs directly; their ordinary dependencies come from the evaluated SDK graph. The page's general `owners` can include other projects discussed in the explanation and therefore does not implicitly select compilation inputs.

Available modes:

| Mode | References |
| --- | --- |
| `host` | The selected projects and their evaluated compile references. |
| `runtime-script` | The actual Runtime script projection and framework references. |
| `editor-script` | Both actual Runtime and Editor script projections and framework references. |

For script modes, `exampleProjects` identifies ownership and SDK context. Its host assemblies are not substituted for projected APIs. A namespace or a page title cannot silently choose a different mode.

## Write complete examples

Use named `csharp` or `cs` fences. Each fence is a source file; executable blocks on the same page compile together. This allows a task to define a type, then show another type using it. Include required using directives in each file. Keep unrelated examples with conflicting type names on separate task pages.

Canonical blocks matching exact recorded API declaration identities are reference declarations, not standalone programs. They are checked against the bound API facts instead of being compiled as examples. Other C# fences remain executable examples; missing context is a blocked result, not an exemption.

Describe prerequisites, expected behavior and ownership alongside the code. A surface-declaration example can explain that drawing belongs to its real presentation owner; it must not pretend to implement an entire feature.

## Prepare the required inputs

Prepare a [documentation snapshot](documentation-queries.md) and retain its exact identity. Build only the managed contracts selected by the example's actual context with the matching SDK, configuration and target. Script examples additionally require their real, current projected reference assemblies.

The example command inspects one evaluated graph and consumes already prepared outputs. It does not build the Editor, prepare Native dependencies, download references or execute example code. Missing outputs remain blocked until their owning preparation succeeds.

## Run the selected page

With the existing Build entry already compiled:

```sh
dotnet entry/InnoEngine.Build/bin/Debug/net10.0/InnoEngine.Build.dll docs validate-examples \
  --engine-root /work/InnoEngine \
  --cache-root /work/InnoEngine.Docs/artifacts/documentation-query \
  --snapshot <prepared-snapshot> \
  --dotnet /selected-sdk/dotnet \
  --page extending.editor-panels \
  --output /work/InnoEngine/artifacts/acceptance/panel-example.json
```

Repeat `--page` for additional exact page identities. Omit it to discover executable examples across the selected snapshot. Use `--configuration` and `--target` when the prepared contract requires them. Script validation accepts explicit `--runtime-reference` and `--editor-reference` paths and verifies the assemblies' logical identities.

## Interpret the report

Each group records the page/content identity, canonical code blocks, reference mode, frozen reference hashes, status and diagnostics. Missing context or references produces `Blocked`; compiler errors produce `Failed`. Independent groups still compile after another group fails. Empty required discovery is blocked. Cancellation does not publish a partial report as completed evidence.

The report retains `Unverified` source API status: passing compilation alone does not certify that arbitrary prepared binaries match the engine source binding. Publication requires the matching source and reference evidence as well as content and website checks.
