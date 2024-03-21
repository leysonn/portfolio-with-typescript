import { ConfigEnv, UserConfig, defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { InlineConfig } from 'vitest';

type ViteConfig = UserConfig & { test: InlineConfig };

// https://vitejs.dev/config/
export default (args: ConfigEnv) => {
    const generateScopedName = args.mode === 'development' ? '[local]_[hash:base64:2]' : '[hash:base64:5]';

    const config: ViteConfig = {
        base: '/portfolio-with-typescript',
        plugins: [react(), TanStackRouterVite()],
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: generateScopedName,
            },
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/test/setup.ts',
        },
    };

    return defineConfig(config);
};
