module.exports =function(grunt) {

    // 配置

    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "mobile/css/style.css": "mobile/css/style.less",
                    "css/style.css": "css/style.less",
                    "css/lol.css": "css/lol.less"
                }
            }
        },

        concat : {

            css : {

                src: ['mobile/css/ratchet.min.css','mobile/css/ratchet-theme-ios.min.css','mobile/css/style.css'],

                dest:'mobile/css/all.css'

            }

        },

        cssmin: {

            css: {

                src:'mobile/css/all.css',

                dest:'mobile/css/all-min.css'

            }

        },

        watch: {
            files: ['mobile/css/style.less','css/style.less','css/lol.less'],
                tasks: ['less','concat','cssmin']
        },

        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        },
        mobileimagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'mobile/images/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'mobile/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        }


    });

    // 载入concat和css插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-css');

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('img', ['mobileimagemin']);
    // 默认任务

    grunt.registerTask('default', ['less','concat','cssmin']);

};