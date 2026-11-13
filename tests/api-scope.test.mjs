import test from 'node:test';
import assert from 'node:assert/strict';
import { isDocumentedProject, isDocumentedProjectGuide } from '../scripts/api-scope.mjs';

test('public C# engine and tools are eligible regardless of assembly naming', () => {
  for (const path of ['src/core/Probe.csproj', 'build/Build.csproj']) {
    assert.equal(isDocumentedProject({ path, isTest: false }), true, path);
  }
});

test('platform implementations, all backends, extern, fixtures and non-C# owners are excluded', () => {
  for (const path of ['tools/Checker.csproj', 'entry/Entry.csproj', 'platforms/Windows/Player.csproj', 'backends/Sdl3/runtime/Adapter.csproj', 'backends/Sdl3/native/Bindings.csproj', 'extern/Dependency.csproj', 'tests/fixtures/Probe.csproj', 'src/Native.vcxproj']) {
    assert.equal(isDocumentedProject({ path, isTest: false }), false, path);
  }
  assert.equal(isDocumentedProject({ path: 'tools/Fixture.csproj', isTest: true }), false);
  assert.equal(isDocumentedProject({}), false);
});

test('platform implementations have no reader project guide while shared platform contracts remain', () => {
  assert.equal(isDocumentedProjectGuide({ path: 'platforms/WindowsX64/Player.csproj' }), false);
  assert.equal(isDocumentedProjectGuide({ path: 'src/Platform/Contracts.csproj' }), true);
  assert.equal(isDocumentedProject({ path: 'src/Platform/Contracts.csproj' }), true);
});

test('retired annotations cannot change the approved path and project boundary', () => {
  assert.equal(isDocumentedProject({ path: 'src/Probe.csproj', apiDocumentation: 'backend-native' }), true);
  assert.equal(isDocumentedProject({ path: 'backends/Sdl3/Adapter.csproj', apiDocumentation: 'public-engine' }), false);
});
