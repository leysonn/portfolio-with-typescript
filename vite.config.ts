import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';

type ViteConfigInput = {
    mode: string;
    command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
    const generateScopedName = args.mode === 'development' ? '[local]_[hash:base64:2]' : '[hash:base64:5]';

    return defineConfig({
        base: '/portfolio-with-typescript',
        plugins: [react(), TanStackRouterVite()],
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: generateScopedName,
            },
        },
    });
};
